"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Slider() {
  const slides = [
    {
      id: 1,
      image: '/inovativbuild.png',
      title: 'Проєкт 1',
      description: 'Інноваційний будівельний проєкт',
      link: '/projects/1',
    },
    {
      id: 2,
      image: '/navadaystech.png',
      title: 'Проєкт 2',
      description: 'Сучасні технології в будівництві',
      link: '/projects/2',
    },
    {
      id: 3,
      image: '/ecosolution.png',
      title: 'Проєкт 3',
      description: 'Екологічні рішення для майбутнього',
      link: '/projects/3',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Перемикання на наступний слайд
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Перемикання на попередній слайд
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Перемикання по кліку на точку
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <Image
              src={slide.image}
              alt={slide.title}
              width={1200}
              height={600}
              className="slide-image"
              priority
            />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <Link href={slide.link} className="slide-link">
                Дізнатися більше
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}