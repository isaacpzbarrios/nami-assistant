import "./init";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import AccessButton from "./components/UI/access-button";
import ChatInput from "./components/UI/chat-input";
import HistoryMsg from "./components/UI/history-msg";
import polly from "./config/aws-config";
import Scene3D from "./components/UI/three-js-render";
import Header from "./components/UI/header";

function App() {
  const [text, setText] = useState("Hola. mucho gusto.");
  const [currentSentence, setCurrentSentence] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const sentencesRef = useRef([]);
  const currentIndexRef = useRef(0);

  const textToSpeech = (text) => {
    return new Promise((resolve, reject) => {
      const params = {
        Text: text,
        OutputFormat: "mp3",
        VoiceId: "Lucia",
      };

      polly.synthesizeSpeech(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
          reject(err);
        } else if (data && data.AudioStream) {
          const audioBlob = new Blob([data.AudioStream], { type: "audio/mp3" });
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          resolve(audio);
        } else {
          reject(new Error("No AudioStream data received"));
        }
      });
    });
  };

  const playSentence = async (sentence) => {
    setCurrentSentence(sentence);
    try {
      const audio = await textToSpeech(sentence);
      audio.onended = () => {
        currentIndexRef.current++;
        if (currentIndexRef.current < sentencesRef.current.length) {
          playSentence(sentencesRef.current[currentIndexRef.current]);
        } else {
          setIsPlaying(false);
          setCurrentSentence("");
        }
      };
      await audio.play();
    } catch (error) {
      console.error("Error playing sentence:", error);
      setIsPlaying(false);
    }
  };

  const startSpeechAndSubtitles = async () => {
    if (isPlaying) return;

    setIsPlaying(true);
    sentencesRef.current = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
    currentIndexRef.current = 0;

    if (sentencesRef.current.length > 0) {
      await playSentence(sentencesRef.current[0]);
    } else {
      setIsPlaying(false);
    }
  };

  const handleClick = () => {
    const text = "Hola";
    console.log(text);
    textToSpeech(text);
  };
  return (
      <div className="body">
        <Header />
        <div className="threejs">
          <Scene3D />
        </div>
        <div className="history-msg">
          <HistoryMsg />
        </div>
        <div className="chat-input">
          <ChatInput />
        </div>
        <div className="button-access">
          <AccessButton handleClick={handleClick} text="Hola mundo" />
          <AccessButton text="Segundo" handleClick={startSpeechAndSubtitles} />
          <AccessButton text="Tercero" />
        </div>
        {currentSentence && (
        <div className="subtitle-container">
          <div className="subtitle">{currentSentence}</div>
        </div>
        )}
      </div>
  );
}

export default App;
