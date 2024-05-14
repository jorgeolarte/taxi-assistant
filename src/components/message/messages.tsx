"use client";
import { Suspense, useEffect, useRef } from "react";
import { Bubble } from "@/components/message/bubble";
import { BubbleSkeleton } from "@/components/message/bubble-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Hero } from "@/components/message/hero";
import { useBot } from "@/hooks/useBot";

export function Messages() {
  const { messages } = useBot();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0) return <Hero />;

  return (
    <ScrollArea className='w-full h-fit'>
      <div className='flex gap-2 flex-col overflow-auto'>
        {messages.map((m) => (
          <Suspense key={m.id} fallback={<BubbleSkeleton />}>
            <Bubble role={m.role} content={m.content} />
          </Suspense>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
}
