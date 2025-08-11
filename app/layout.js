'use client';
import Link from 'next/link';
import React from 'react';
import './globals.css';
import Header from './header/header';

const Layout = ({ children }) => {
  return (
    <html lang="uk">
      <body>
      
      <Header/>
      
      <main className="content">{children}</main>

      <footer className="footer">
        <div className="top-footer">
          <div className="footer-logo-metadata">
            <div className="logo">
              <Link href="/">🏗 BuildCo</Link>
            </div>
            <p>Будуємо майбутнє разом!</p>
            <p>OOO Білдер</p>
            <p>ЄДРПОУ: 12345678</p>
            <p>Адреса: Київ, вул. Будівельна.</p>
          </div>
          <div className='footer-big-lodo'>🏗</div>
          <div className="footer-links">
            <Link href="/privacy">Політика конфіденційності</Link>
            <Link href="/terms">Умови використання</Link>
            <Link href="/contact">Контакти</Link>
            <Link href="/adpan">AdminPage</Link>
          </div>
        </div>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} BuildCo. Всі права захищено.</p>
          <p>Made with ❤️ by Станіслав</p>
        </div>
      </footer>
    </body>
    </html>
  );
};

export default Layout;
