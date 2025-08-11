import Link from 'next/link';
import styles from './placeholder.module.css';

export default function Placeholder() {
  return (
    <section className={styles.placeholder}>
      <div className={styles.container}>
        <h1>Розділ у розробці</h1>
        <p>
          Цей розділ нашого сайту ще в процесі створення. Незабаром тут з’явиться корисна інформація!
        </p>
        <Link href="/" className={styles.ctaButton}>
          Повернутися на головну
        </Link>
      </div>
    </section>
  );
}