"use client";
import { useBot } from "@/hooks/useBot";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormEvent } from "react";

export function Prompt() {
  const { botType, input, handleInputChange, handleSubmit, isLoading } =
    useBot();

  if (botType === "notFound") return null;

  return (
    <div className='sticky bottom-4 bg-white'>
      <Separator className='mx-auto mb-4' />
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) =>
          handleSubmit(event, {
            options: {
              body: { botType },
            },
          })
        }
        className='flex flex-row w-full m-auto max-w-sm items-center gap-2'
      >
        <Input
          type='text'
          placeholder='Dime, ¿en qué puedo ayudarte?'
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          className=''
        />
        <Input type='hidden' name='options' value={botType} />
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
