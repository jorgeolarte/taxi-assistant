"use client";
import Bot from "@/components/message";
import { BotProvider } from "@/providers/BotContext";

export default function HomePage() {
  return (
    <BotProvider>
      <Bot />
    </BotProvider>
  );
}
