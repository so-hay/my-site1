'use client';
import Book1 from "./book/Book1";
import Category from "./book/Category";
import Header from "./component/Header";
import Hero from "./component/Hero";

// import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <div className="">
    <Header />
    <Hero />
    <Book1 />
    <Category/>
    </div>
  );
}
