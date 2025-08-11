import Link from 'next/link';
import Image from 'next/image';

export default function Etbuild() {
  const buildingTypes = [
    {
      id: 1,
      title: 'Житлові будинки',
      description:
        'Будуємо сучасні багатоповерхові будинки, котеджі та приватні садиби з урахуванням комфорту та енергоефективності.',
      image: '/images/residential.jpg',
    },
    {
      id: 2,
      title: 'Комерційні об’єкти',
      description:
        'Проектуємо та зводимо офіси, торговельні центри та бізнес-простори для максимальної функціональності.',
      image: '/images/commercial.jpg',
    },
    {
      id: 3,
      title: 'Промислові споруди',
      description:
        'Реалізуємо проєкти складів, заводів та логістичних центрів із дотриманням технічних стандартів.',
      image: '/images/industrial.jpg',
    },
    {
      id: 4,
      title: 'Інфраструктурні об’єкти',
      description:
        'Будуємо мости, дороги та інші інфраструктурні об’єкти для розвитку міст та регіонів.',
      image: '/images/infrastructure.jpg',
    },
  ];

  return (
    <section className="what-we-build">
      <div className="container">
        <h1>Що будує BuildCo</h1>
        <div className="build-grid">
          {buildingTypes.map((type) => (
            <div key={type.id} className="build-card">
              <Image
                src={type.image}
                alt={type.title}
                width={300}
                height={200}
                className="build-image"
              />
              <h2>{type.title}</h2>
              <p>{type.description}</p>
              <Link href="/projects" className="build-link">
                Дізнатися більше
              </Link>
            </div>
          ))}
        </div>
        <Link href="/conection" className="cta-button">
          Зв’язатися з нами
        </Link>
      </div>
    </section>
  );
}