"use client";
import { Messages } from "@/components/message/messages";
import { Prompt } from "@/components/message/prompt";

export function Bot() {
  return (
    <div className='mt-14 flex flex-col justify-between gap-2 py-4 px-2 w-full max-w-md m-auto h-screen'>
      <Messages />
      <Prompt />
    </div>
  );
}
