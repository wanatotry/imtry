"use client"
import Link from 'next/link';
import React, {useEffect} from "react";



export default function Header() {
  useEffect(() => {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        header.classList.remove('headstl');
      } else {
        header.classList.remove('sticky');
        header.classList.add('headstl');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header headstl">
      <div className="logo">
        <Link href="/">🏗 BuildCo</Link>
      </div>

      <nav className="nav">
        <Link href="/">Головна</Link>
        <Link href="/Placeholder">Роботи</Link>
        <Link href="/Etall">Послуги</Link>
        <Link href="/products">Товари</Link>
      </nav>

      <div className="social">
        <a href="https://t.me/yourname" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </header>
  );
}