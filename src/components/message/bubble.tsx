"use client";

type Props = {
  role: string;
  content: string;
};

export function Bubble({ role, content }: Props) {
  return (
    <div className='flex flex-row gap-2'>
      <div className='flex justify-center items-start'>
        <div className='bg-secondary p-2 rounded-full'>
          {role === "user" ? <>😀</> : <>🚕</>}
        </div>
      </div>
      <div className='text-sm'>
        <span className='font-bold'>
          {role === "user" ? "Usuario: " : "Coomocart: "}
        </span>
        <p className={`whitespace-pre-wrap text-sm`}>{content}</p>
      </div>
    </div>
  );
}
