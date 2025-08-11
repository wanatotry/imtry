import Link from 'next/link';
import Image from 'next/image';
import styles from './etrefit.module.css';

export default function Etrefit() {
  const repairTypes = [
    {
      id: 1,
      title: 'Косметичний ремонт',
      description:
        'Оновлення інтер’єру: фарбування стін, заміна підлоги, оновлення декору для житлових і офісних приміщень.',
      image: '/images/cosmetic-repair.jpg',
    },
    {
      id: 2,
      title: 'Капітальний ремонт',
      description:
        'Повна реконструкція приміщень: заміна комунікацій, перепланування, вирівнювання стін і стель.',
      image: '/images/major-repair.jpg',
    },
    {
      id: 3,
      title: 'Дизайнерський ремонт',
      description:
        'Індивідуальні рішення з унікальним дизайном інтер’єру для квартир, будинків і комерційних приміщень.',
      image: '/images/designer-repair.jpg',
    },
    {
      id: 4,
      title: 'Ремонт промислових приміщень',
      description:
        'Відновлення та модернізація складів, цехів і виробничих приміщень із дотриманням стандартів.',
      image: '/images/industrial-repair.jpg',
    },
  ];

  return (
    <section className={styles.repairTypes}>
      <div className={styles.container}>
        <h1>Типи ремонтів приміщень</h1>
        <div className={styles.repairGrid}>
          {repairTypes.map((type) => (
            <div key={type.id} className={styles.repairCard}>
              <Image
                src={type.image}
                alt={type.title}
                width={300}
                height={200}
                className={styles.repairImage}
              />
              <h2>{type.title}</h2>
              <p>{type.description}</p>
              <Link href="/services" className={styles.repairLink}>
                Дізнатися більше
              </Link>
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