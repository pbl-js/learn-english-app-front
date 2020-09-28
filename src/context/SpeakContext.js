import React, { createContext, useState, useCallback } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const SpeakContext = React.createContext();

const SpeakProvider = ({ children }) => {
  const [index, setIndex] = useState(13);
  const { speak, voices, speaking } = useSpeechSynthesis();

  const enVoices = voices.filter((item) => item.lang.includes("en"));
  const voice = enVoices[index] || null;

  console.log(enVoices);

  const speakText = useCallback(
    (text) => {
      speak({ text, voice });
    },
    [voice]
  );

  return (
    <SpeakContext.Provider value={{ speakText, enVoices, setIndex, speaking }}>
      {children}
    </SpeakContext.Provider>
  );
};

function useSpeakContext() {
  const context = React.useContext(SpeakContext);
  if (context === undefined) {
    throw new Error("useSpeakContext must be used within a SpeakProvider");
  }
  return context;
}

export { SpeakProvider, useSpeakContext };
