"use client";
import { ChangeEvent, FormEvent, createContext, useState } from "react";
import { useChat } from "ai/react";
import type { ChatRequestOptions, Message } from "ai";

export enum BotType {
  notFound = "notFound",
  taxi = "taxi",
  lawer = "lawer",
}

type BotContextType = {
  botType: BotType;
  messages: Message[];
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  handleBotTypeChange: ({ newBotType }: { newBotType: string }) => void;
  isLoading: boolean;
};

const initialState: BotContextType = {
  botType: BotType.notFound,
  messages: [],
  input: "",
  handleInputChange: () => {},
  handleSubmit: () => {},
  handleBotTypeChange: () => {},
  isLoading: false,
};

export const BotContext = createContext<BotContextType>(initialState);

export function BotProvider({ children }: { children: React.ReactNode }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  const [botType, setBotType] = useState<BotType>(BotType.notFound);

  const handleBotTypeChange = ({ newBotType }: { newBotType: string }) => {
    setBotType(newBotType as BotType);
    messages.length = 0;
  };

  return (
    <BotContext.Provider
      value={{
        botType: botType,
        messages,
        input,
        handleInputChange,
        handleSubmit,
        handleBotTypeChange,
        isLoading,
      }}
    >
      {children}
    </BotContext.Provider>
  );
}
