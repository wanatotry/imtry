import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Slider from "./components/slider";
import Hero from "./components/hero";


export default function Home() {
  return (
    <>
    <Hero/>
    <main className="first-stat">
         {/* 1. Hero Section */}
      {/*<section className="hero">
        <div className="hero-content">
          <h1>Будуємо майбутнє разом</h1>
          <p>Надійний партнер у будівництві з досвідом і репутацією.</p>
        </div>
      </section>*/}

      {/* 2. Stats Section */}
      <section className="stats">
        <div className="stat-block"> <h3>200+</h3><p>виконаних контрактів</p></div>
        <div className="stat-block"> <h3>8+</h3><p>років на ринку</p></div>
        <div className="stat-block"> <h3>100%</h3><p>задоволених клієнтів</p></div>
      </section>

      {/* 3. Services Overview */}
      <section className="services-intro">
        <h2>Наші Послуги</h2>
        <div className="services-grid">
          <div className="service-item">
            <Image src="/proekt.png" alt="Послуга 1" width={300} height={200} />
            <Link href="/etwork" className="service-link">
              <h4>Проєктування</h4>
              <p>Створення проєктів будь-якої складності</p>
            </Link>
          </div>
          <div className="service-item">
            <Image src="/bilding.png" alt="Послуга 2" width={300} height={200} />
            <Link href="/etbuild" className="service-link">
              <h4>Будівництво</h4>
              <p>Зведення житлових і комерційних об’єктів</p>
            </Link>
          </div>
          <div className="service-item">
            <Image src="/rebild.png" alt="Послуга 3" width={300} height={200} />
            <Link href="/etrefit" className="service-link">
              <h4>Ремонт</h4>
              <p>Капітальний та косметичний ремонт приміщень</p>
            </Link>
          </div>
        </div>
      </section>


      {/* 4. Slider Placeholder */}
      <section className="slider-section">
        <h2>Нам довіряють</h2>
        <p>Сотні клієнтів по всій Україні</p>
        <div className="slider-placeholder">
          <Slider/>
        </div>
      </section>

      {/* 5. Work Steps */}
      <section className="work-steps">
        <h2>Етапи роботи</h2>
        <p>Як ми реалізуємо ваші проєкти</p>
        <div className="steps-grid">
          {[
            { title: 'Запит', description: 'Ви звертаєтесь до нас із побажаннями та ідеями' },
            { title: 'Оцінка', description: 'Ми аналізуємо проєкт, формуємо попередній кошторис' },
            { title: 'Підписання договору', description: 'Фіксуємо обсяги робіт, терміни, гарантії' },
            { title: 'Проєктування', description: 'Готуємо креслення, макети, дизайн' },
            { title: 'Реалізація', description: 'Виконуємо роботи згідно з планом' },
            { title: 'Здача об’єкта', description: 'Передаємо завершений об’єкт замовнику' }
          ].map((step, i) => (
            <div key={i} className="step-item">
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <Link href="/fromstarttoend" className="view-all-steps">
          Переглянути всі етапи
        </Link>
      </section>

      {/* 6. Case Studies Placeholder */}
      <section className="cases">
        <h2>Наші кейси</h2>
        <p>Приклади реалізованих проєктів (буде підключено пізніше)</p>
        <div className="cases-placeholder">[Тут буде кейс-блок]</div>
      </section>

      <section className="services-list">
        {/* 7. Partners */}
        <section className="partners">
          <h2>З ким ми працюємо</h2>
          <ul>
            <li>Постачальники будматеріалів</li>
            <li>Дизайн-студії</li>
            <li>Інженерні компанії</li>
          </ul>
          <Link href="/Placeholder" className="view-all-steps">
            Переглянути всіх партнерів
          </Link>
        </section>

        {/* 8. Why Us */}
        <section className="why-us">
          <h2>Чому обирають нас</h2>
          <ul>
            <li>Якість та гарантії</li>
            <li>Прозора ціна</li>
            <li>Професійна команда</li>
          </ul>
          <Link href="/Placeholder" className="view-all-steps">
            Ознайомитись з деталями
          </Link>
        </section>

        {/* 9. Services List */}
        
        <section className="full-services">
          <h2>Доступні послуги</h2>
          <ul>
            <li>Будівництво під ключ</li>
            <li>Капітальний ремонт</li>
            <li>Фасадні роботи</li>
            <li>Покрівельні роботи</li>
            <li>Електромонтаж</li>
          </ul>
          <Link href="/Placeholder" className="view-all-steps">
            Перегляд всіх послуг
          </Link>
        </section>
      </section>

      {/* 10. Contact Info */}
      <section className="contact-info">
        <h2>Контакти</h2>
        <p>ООО Білдер</p>
        <p>Адреса: Київ, вул. Будівельна</p>
        <p>Телефон: <a href="tel:+380671234567">+38 (067) 123 45 67</a></p>
        <p>Email: <a href="mailto:info@buildco.ua">info@buildco.ua</a></p>

        <div className="messengers">
          <h4>Зв’язатись через месенджери:</h4>
          <ul>
            <li>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </li>
            <li>
              <a href="viber://chat?number=%2B380671234567">
                Viber
              </a>
            </li>
            <li>
              <a href="https://wa.me/380671234567" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </section>
      </main>
      </>
  );
}
