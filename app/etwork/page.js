import Link from 'next/link';


export default function Etwork() {
  const stages = [
    {
      id: 1,
      title: 'Збір вимог',
      description:
        'Аналіз потреб клієнта, вивчення ділянки та технічних умов. Формуємо технічне завдання для проєкту.',
    },
    {
      id: 2,
      title: 'Розробка концепції',
      description:
        'Створюємо ескізний проєкт із урахуванням архітектурних, функціональних та естетичних вимог.',
    },
    {
      id: 3,
      title: 'Створення креслень',
      description:
        'Розробляємо детальні креслення та 3D-моделі для точної реалізації проєкту.',
    },
    {
      id: 4,
      title: 'Узгодження та затвердження',
      description:
        'Погоджуємо проєкт із клієнтом та відповідними органами, вносимо фінальні правки.',
    },
  ];

  return (
    <section className="design-stages">
      <div className="container">
        <h1>Проектування</h1>
        <div className="stages-grid">
          {stages.map((stage) => (
            <div key={stage.id} className="stage-card">
              <h2>{stage.title}</h2>
              <p>{stage.description}</p>
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