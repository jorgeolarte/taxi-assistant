"use client";
import { useBot } from "@/hooks/useBot";
import { BotType } from "@/providers/BotContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Hero() {
  const { botType, handleBotTypeChange } = useBot();

  if (botType !== BotType.notFound)
    return (
      <div className=' flex flex-col justify-center  h-screen'>
        <h1 className='text-4xl font-extrabold tracking-tigh'>Hola 👋</h1>
        <p className='leading-7'>
          {botType === BotType.taxi && "Asistente de IA 🤖 para pedir tu taxi"}
          {botType === BotType.lawer && "Asistente de IA 🤖 de Grupo Gie"}
        </p>
        <p className='leading-5 text-xs italic'>
          * Este es un proyecto de demostración, ningun servicio será
          solicitado.
        </p>
      </div>
    );

  return (
    <div className=' flex flex-col justify-center h-screen gap-2'>
      <h1 className='text-4xl font-extrabold tracking-tigh'>Hola 👋</h1>
      <p className='leading-7'>Selecciona una IA para conversar</p>
      <Select onValueChange={(e) => handleBotTypeChange({ newBotType: e })}>
        <SelectTrigger>
          <SelectValue placeholder='Tipos de bot' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipos de bot</SelectLabel>
            <SelectItem value={BotType.taxi}>Taxi 🚕</SelectItem>
            <SelectItem value={BotType.lawer}>Abogado 👨‍💼</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className='leading-5 text-xs italic'>
        * Este es un proyecto de demostración, ningun servicio será solicitado.
      </p>
    </div>
  );
}
