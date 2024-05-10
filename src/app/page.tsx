"use client";
import { useChat } from "ai/react";
import { Messages } from "@/components/message/messages";
import { Prompt } from "@/components/message/prompt";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <div className='mt-14 flex flex-col justify-between gap-2 py-4 px-2 w-full max-w-md m-auto h-screen'>
      <Messages messages={messages} />

      <Prompt
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
