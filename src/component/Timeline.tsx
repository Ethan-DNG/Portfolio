
interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
}

export const Timeline= () => {
  const timelineData: TimelineItem[] = [
    {
      year: '2020',
      title: 'Baccalauréat Général',
      subtitle: 'Spécialité Maths et Physique Chimie - Mention Bien'
    },
    {
      year: '2023',
      title: 'BUT Informatique',
      subtitle: "Réalisation et développement d'application"
    },
    {
      year: '2025',
      title: 'Isart Digital',
      subtitle: 'Stage Développeur Web'
    }
  ];

  return (
    <div className="timeline-container section-background" id="parcours">
      <h2 className="timeline-title">Parcours</h2>
      <div className="timeline">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

