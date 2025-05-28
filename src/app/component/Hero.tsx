import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 4500,
  infinite: true,
  arrows: false,
  cssEase: "linear",
  speed: 500,
  variableWidth: true,
};

const carouselItems = [
  {
    id: 1,
    name: 'rainy',
    href: '/hoshiwotugumono.jpg',
    imageSrc: '/hoshiwotugumono.jpg',
    imageAlt: 'グラデーション',
  },
  {
    id: 2,
    name: 'くまにてがみをかきました',
    href: '/item/il_sakura',
    imageSrc: '/kumani.jpg',
    imageAlt: 'くまにてがみをかきました',
  },
  {
    id: 3,
    name: 'アミ',
    href: '/item/march',
    imageSrc: '/ami.jpg',
    imageAlt: '桜',
  },
];

export default function Hero() {
  return (
    <div className="bg-gray-500 p-10 text-center">
      <h2 className="text-white text-2xl font-bold mb-6">
        おすすめ本</h2>
      <div className="image-container">
        <Slider {...sliderSettings}>
          {carouselItems.map((item) => (
            <div key={item.id}>
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                width="300px"
                className="mx-auto rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
