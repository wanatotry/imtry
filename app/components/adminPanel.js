"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './AdminPanel.module.css';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('messages');

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      console.log('Fetching messages from /api/send-message'); // Дебаг
      fetch('/api/send-message', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          console.log('API response status:', response.status); // Дебаг
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('API data:', data); // Дебаг
          setMessages(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching messages:', err);
          setError(`Не вдалося завантажити повідомлення: ${err.message}`);
          setLoading(false);
        });
    }
  }, [isAuthenticated]);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', loginData); // Дебаг
    if (loginData.username === 'admin' && loginData.password === 'password') {
      setIsAuthenticated(true);
      setLoginData({ username: '', password: '' });
      setError(null); // Очистити помилку при успішному вході
    } else {
      setError('Невірний логін або пароль');
      console.error('Login failed: incorrect credentials');
    }
  };

  const handleDeleteMessage = async (id) => {
  try {
    const response = await fetch('/api/send-message', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) throw new Error('Помилка при видаленні');
    setMessages(messages.filter((message) => message.id !== id));
  } catch (error) {
    setError(`Не вдалося видалити повідомлення: ${error.message}`);
  }
};

  return (
    <section className={styles.adminPanel}>
      <div className={styles.container}>
        {!isAuthenticated ? (
          <>
            <h1>Вхід до адмін-панелі</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleLoginSubmit} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="username">Логін</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  required
                  placeholder="Введіть логін"
                  autoComplete="username"
                  tabIndex={0}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  placeholder="Введіть пароль"
                  autoComplete="current-password"
                  tabIndex={0}
                  className={styles.formInput}
                />
              </div>
              <button type="submit" className={styles.submitButton} aria-label="Увійти до адмін-панелі">
                Увійти
              </button>
            </form>
          </>
        ) : (
          <>


          <div className={styles.tabs}>
            <button
              className={activeTab === 'messages' ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab('messages')}
            >
              Повідомлення
            </button>
            <button
              className={activeTab === 'caseStudies' ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab('caseStudies')}
            >
              Case Studies
            </button>
            <button
              className={activeTab === 'slider' ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab('slider')}
            >
              Slider
            </button>
          </div>

            {activeTab === 'messages' && (
              <>
            <h1>Адмін-панель</h1>
            <div className={styles.messagesSection}>
              <h2>Повідомлення з форми зворотного зв’язку</h2>
              {loading ? (
                <p>Завантаження...</p>
              ) : error ? (
                <p className={styles.error}>{error}</p>
              ) : messages.length === 0 ? (
                <p>Немає повідомлень</p>
              ) : (
                <div className={styles.messagesGrid}>
                  {messages.map((message) => (
                    <div key={message.id} className={styles.messageCard}>
                      <p><strong>№</strong> {message.id}</p>
                      <p><strong>Ім’я:</strong> {message.name}</p>
                      <p><strong>Телефон:</strong> {message.phone}</p>
                      <p><strong>Email:</strong> {message.email}</p>
                      <p><strong>Повідомлення:</strong> {message.message}</p>
                      <p><strong>Дата:</strong> {new Date(message.created_at).toLocaleDateString('uk-UA')}</p>
                      <button
                        onClick={() => handleDeleteMessage(message.id)}
                        className={styles.deleteButton}
                        aria-label={`Видалити повідомлення від ${message.name}`}
                      >
                        Видалити
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            </>)}

            {activeTab === 'caseStudies' && (
              <div className={styles.caseStudiesSection}>
                <h2>Case Studies</h2>
                {/* Логіка для відображення та редагування */}
              </div>
            )}
            {activeTab === 'slider' && (
              <div className={styles.sliderSection}>
                <h2>Slider</h2>
                {/* Логіка для відображення та редагування */}
              </div>
            )}
            <Link href="/" className={styles.backButton} aria-label="Повернутися на головну сторінку">
              На головну
            </Link>
          </>
        )}
      </div>
    </section>
  );
}