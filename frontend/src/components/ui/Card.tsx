import { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
}
export default function Card({ children }: CardProps) {

  return (
    <section className="flex justify-center items-center">
      <div className="bg-black2 text-white w-full rounded-lg py-10 px-5">
        {children}
      </div>
    </section>
  );
}