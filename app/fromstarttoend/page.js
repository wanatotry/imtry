import Link from 'next/link';
import styles from './fromstarttoend.module.css';

export default function WorkStages() {
  const stages = [
    {
      id: 1,
      title: 'Запит',
      description:
        'Клієнт подає запит на послуги, надаючи інформацію про проєкт та вимоги.',
    },
    {
      id: 2,
      title: 'Оцінка',
      description:
        'Проводимо аналіз проєкту, оцінюємо обсяг робіт і надаємо попередній кошторис.',
    },
    {
      id: 3,
      title: 'Підписання договору',
      description:
        'Укладаємо договір із чіткими умовами, термінами та бюджетом проєкту.',
    },
    {
      id: 4,
      title: 'Проектування',
      description:
        'Розробляємо детальний проєкт, включаючи креслення та 3D-візуалізацію.',
    },
    {
      id: 5,
      title: 'Реалізація',
      description:
        'Виконуємо будівельні або ремонтні роботи з дотриманням стандартів якості.',
    },
    {
      id: 6,
      title: 'Здача',
      description:
        'Передаємо готовий об’єкт клієнту після перевірки та фінального узгодження.',
    },
  ];

  return (
    <section className={styles.workStages}>
      <div className={styles.container}>
        <h1>Етапи роботи</h1>
        <div className={styles.stagesGrid}>
          {stages.map((stage) => (
            <div key={stage.id} className={styles.stageCard}>
              <h2>{stage.title}</h2>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>
        <Link href="/conection" className={styles.ctaButton}>
          Зв’язатися з нами
        </Link>
      </div>
    </section>
  );
}