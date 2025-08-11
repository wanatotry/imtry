'use client';   
/*import { useState } from 'react';
import Link from 'next/link';
import styles from './conection.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    console.log('Field:', e.target.name, 'Value:', e.target.value); // Дебаг
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch('/api/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    alert('Повідомлення надіслано!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  } else {
    alert('Помилка при надсиланні.');
  }
};*/
  /*const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна додати логіку відправки форми, наприклад, через API
    console.log('Form submitted:', formData);
    alert('Повідомлення надіслано! Ми зв’яжемося з вами незабаром.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };*/

  /*return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1>Зв’язатися з нами</h1>
        <div className={styles.contactGrid}>
          <div className={styles.formSection}>
            <h2>Відправити повідомлення</h2>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Ім’я</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Повідомлення</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.formTextarea}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Надіслати
              </button>
            </form>
          </div>
          <div className={styles.infoSection}>
            <h2>Наші контакти</h2>
            <p>
              <strong>Адреса:</strong> вул. Будівельна, 123, Київ, Україна
            </p>
            <p>
              <strong>Телефон:</strong>{' '}
              <Link href="tel:+380123456789">+38 (012) 345-67-89</Link>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <Link href="mailto:info@buildco.com">info@buildco.com</Link>
            </p>
            <p>
              <strong>Графік роботи:</strong> Пн-Пт: 9:00–18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}*/
import { useState } from 'react';
import Link from 'next/link';
import styles from './conection.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    console.log('Field:', e.target.name, 'Value:', e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Помилка при відправці');
      }
      alert('Повідомлення надіслано!');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      alert('Помилка при відправці.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1>Зв’язатися з нами</h1>
        <div className={styles.contactGrid}>
          <div className={styles.formSection}>
            <h2>Відправити повідомлення</h2>
            <form onSubmit={handleSubmit} className={styles.contactForm} autoComplete="off">
              <div className={styles.formGroup}>
                <label htmlFor="name">Ім’я</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  tabIndex={0}
                  autoComplete="name"
                  placeholder="Ваше ім’я"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  tabIndex={0}
                  autoComplete="tel"
                  placeholder="+38 (XXX) XXX-XX-XX"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  tabIndex={0}
                  autoComplete="email"
                  placeholder="example@domain.com"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Повідомлення</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  tabIndex={0}
                  placeholder="Ваше повідомлення"
                  className={styles.formTextarea}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton} aria-label="Надіслати повідомлення">
                Надіслати
              </button>
            </form>
          </div>
          <div className={styles.infoSection}>
            <h2>Наші контакти</h2>
            <p>
              <strong>Адреса:</strong> вул. Будівельна, 123, Київ, Україна
            </p>
            <p>
              <strong>Телефон:</strong>{' '}
              <Link href="tel:+380123456789" aria-label="Зателефонувати за номером +38 (012) 345-67-89">
                +38 (012) 345-67-89
              </Link>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <Link href="mailto:info@buildco.com" aria-label="Надіслати email на info@buildco.com">
                info@buildco.com
              </Link>
            </p>
            <p>
              <strong>Графік роботи:</strong> Пн-Пт: 9:00–18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}