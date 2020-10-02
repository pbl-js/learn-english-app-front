import React, { createContext, useState, useCallback } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const SpeakStateContext = React.createContext();
const SpeakDispatchContext = React.createContext();

const SpeakProvider = ({ children }) => {
  const { speak, voices, speaking } = useSpeechSynthesis();
  const enVoices = voices.filter((item) => item.lang.includes("en"));
  const voice = enVoices[13] || null;

  const speakText = useCallback(
    (text) => {
      speak({ text, voice });
    },
    [voice]
  );

  return (
    <SpeakStateContext.Provider value={{ voices, speaking }}>
      <SpeakDispatchContext.Provider value={{ speakText }}>
        {children}
      </SpeakDispatchContext.Provider>
    </SpeakStateContext.Provider>
  );
};

function useSpeakState() {
  const context = React.useContext(SpeakStateContext);
  if (context === undefined) {
    throw new Error("useSpeakState must be used within a SpeakProvider");
  }
  return context;
}

function useSpeakDispatch() {
  const context = React.useContext(SpeakDispatchContext);
  if (context === undefined) {
    throw new Error("UseSpeakDispatch must be used within a SpeakProvider");
  }
  return context;
}

export { SpeakProvider, useSpeakState, useSpeakDispatch };
