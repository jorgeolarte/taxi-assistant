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

export function ChangeBot() {
  const { botType, handleBotTypeChange } = useBot();

  return (
    <Select onValueChange={(e) => handleBotTypeChange({ newBotType: e })}>
      <SelectTrigger>
        <SelectValue placeholder='🤖' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tipos de bot</SelectLabel>
          <SelectItem value={BotType.taxi}>🚕</SelectItem>
          <SelectItem value={BotType.lawer}>👨‍💼</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
