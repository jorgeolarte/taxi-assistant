import { useBot } from "@/hooks/useBot";
import { ChangeBot } from "@/components/navbar/change-bot";
import { Separator } from "@/components/ui/separator";
import { BotType } from "@/providers/BotContext";

export function Header() {
  const { botType } = useBot();

  return (
    <div className='fixed top-0 w-full bg-white z-10'>
      <nav className='mx-auto px-2 max-w-md py-2 flex flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <span className='text-xl font-bold'>
            {botType === BotType.notFound && "Asistente de IA"}
            {botType === BotType.taxi && "Coomocart 🚕"}
            {botType === BotType.lawer && "Grupo Gie 👨‍💼"}
          </span>
          <span className='text-xs'>
            {botType === BotType.notFound &&
              "Selecciona una IA 🤖 para empezar"}
            {botType === BotType.taxi &&
              "Asistente de IA 🤖 para pedir tu taxi"}
            {botType === BotType.lawer && "Tu confianza, nuestra garantia"}
          </span>
        </div>
        <div>{botType !== BotType.notFound && <ChangeBot />}</div>
      </nav>
      <Separator className='mx-auto' />
    </div>
  );
}
