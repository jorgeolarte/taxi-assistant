"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export default function Prompt({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: Props) {
  return (
    <div className='sticky bottom-4 bg-white'>
      <Separator className='mx-auto mb-4' />
      <form
        onSubmit={handleSubmit}
        className='flex flex-row w-full m-auto max-w-sm items-center gap-2'
      >
        <Input
          type='text'
          placeholder='Dime, dónde hago llegar tu taxi?'
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          className=''
        />
        <Button variant='outline' type='submit' disabled={isLoading}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-primary'
            viewBox='0 0 24 24'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.534.534 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993l16.93-5.925Z'
            />
          </svg>
        </Button>
      </form>
    </div>
  );
}
