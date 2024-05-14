"use client";
import { useContext } from 'react';
import { BotContext } from '@/providers/BotContext';

export function useBot() {
    const context = useContext(BotContext);

    return context;
}
