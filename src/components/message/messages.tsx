"use client";
import { Suspense } from "react";
import { useChat } from "ai/react";
import { Bubble } from "@/components/message/bubble";
import { BubbleSkeleton } from "@/components/message/bubble-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Hero } from "@/components/message/hero";

export function Messages() {
  const { messages } = useChat();

  if (messages.length === 0) return <Hero />;

  return (
    <ScrollArea className='w-full h-fit'>
      <div className='flex flex-col gap-2'>
        {messages.map((m) => (
          <Suspense key={m.id} fallback={<BubbleSkeleton />}>
            <Bubble role={m.role} content={m.content} />
          </Suspense>
        ))}
      </div>
    </ScrollArea>
  );
}
