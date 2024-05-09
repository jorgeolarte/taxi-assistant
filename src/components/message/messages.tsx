"use client";
import { Suspense } from "react";
import { Bubble } from "@/components/message/bubble";
import { BubbleSkeleton } from "@/components/message/bubble-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Hero } from "@/components/message/hero";
import type { Message } from "ai/react";

type Props = {
  messages: Message[];
};

export function Messages({ messages }: Props) {
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
