// import Footer from "@/components/Footer";
import Header from "../component/Header";
import Image from "next/image";

export default function Book1() {
  return (
    <div className="p-10 text-center bg-gray-400">
      <Header/>
      <div className="items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <Image 
          src="/ami.jpg" 
          alt="夏をイメージしたグラデーションとアヒル" 
          width={500}
          height={500}
          className="w-1/2 h-auto rounded-lg " 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-right text-gray-600">
          グラデーションとイラスト風のアヒルで夏をイメージしたデザイン
        <br/>説明文部分
      </p>

      <Image 
          src="/hoshiwotugumono.jpg" 
          alt="夏をイメージしたグラデーションとアヒル" 
          width={500}
          height={500}
          className="w-1/2 h-auto rounded-lg " 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-right text-gray-600">
          グラデーションとイラスト風のアヒルで夏をイメージしたデザイン
        <br/>説明文部分
      </p>
      </div>
    </div>
  )
}