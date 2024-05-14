"use client";
import { ChangeEvent, FormEvent, createContext } from "react";
import { useChat } from "ai/react";
import type { Message } from "ai";

type BotContextType = {
  messages: Message[];
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

const initialState: BotContextType = {
  messages: [],
  input: "",
  handleInputChange: () => {},
  handleSubmit: () => {},
  isLoading: false,
};

export const BotContext = createContext<BotContextType>(initialState);

export function BotProvider({ children }: { children: React.ReactNode }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <BotContext.Provider
      value={{ messages, input, handleInputChange, handleSubmit, isLoading }}
    >
      {children}
    </BotContext.Provider>
  );
}
