"use client";

export function Hero() {
  return (
    <div className=' flex flex-col justify-center  h-screen'>
      <h1 className='text-4xl font-extrabold tracking-tigh'>Hola 👋</h1>
      <p className='leading-7'>Soy el asistente de IA 🤖 de Coomocart.</p>
      <p className='leading-5 text-xs italic'>
        * Este es un proyecto de demostración, ningun taxi será solicitado.
      </p>
    </div>
  );
}
