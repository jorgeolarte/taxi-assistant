"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function BubbleSkeleton() {
  return (
    <div className='flex flex-row gap-2'>
      <div className='flex justify-center items-start'>
        <Skeleton className='h-12 w-12 rounded-full' />
      </div>
      <div>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  );
}
