"use client";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  return (
    <div className='fixed top-0 w-full bg-white z-10'>
      <nav className='mx-auto px-2 max-w-md py-2 flex flex-col'>
        <span className='text-xl font-bold'>Coomocart 🚕</span>
        <span className='text-xs'>Asistente de IA 🤖 para pedir tu taxi</span>
      </nav>
      <Separator className='mx-auto' />
    </div>
  );
}
