'use client';
import Book1 from "./book/Book1";
import Category from "./book/Category";
import Header from "./component/Header";
import Hero from "./component/Hero";

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
