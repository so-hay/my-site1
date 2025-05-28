'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-red-400 p-50 text-center">
      <div>
      おすすめ本のスライド
      <br />
      <Link href="/">SF
        <Image 
          src="/ami.jpg" 
          alt="夏をイメージしたグラデーションとアヒル" 
          width={500}
          height={500}
          className="w-1/2 h-auto rounded-lg " 
        />
      </Link>
      <Link href="/">SF
        <Image 
          src="/ami.jpg" 
          alt="夏をイメージしたグラデーションとアヒル" 
          width={500}
          height={500}
          className="w-1/2 h-auto rounded-lg " 
        />
      </Link>
    </div>
    </div>
  );
}
