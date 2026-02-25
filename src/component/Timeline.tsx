
interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  location?: string;
  details?: string[];
  link?: string;
  linkText?: string;
}

export const Timeline = () => {
  const timelineData: TimelineItem[] = [
    {
      year: 'Depuis Déc. 2025',
      title: 'Apprenti Développeur Web',
      location: 'EasyVista - Noisy-le-Grand',
      details: [
        "Développement d'interfaces utilisateur modernes sous React.js pour des solutions ITSM.",
        "Pilotage de la refonte complète du menu de navigation pour optimiser l'expérience utilisateur (UX).",
        "Intégration front-end et communication avec un back-end PHP complexe."
      ]
    },
    {
      year: 'Avr. – Juin 2025',
      title: 'Développeur Stagiaire',
      location: 'Isart Digital - Paris',
      details: [
        "Développement d'applications web en Nuxt.js et PHP pour la gestion pédagogique.",
        "Automatisation des processus de signalement de retards et traitement de flux de données."
      ]
    },
    {
      year: '2023 – 2026',
      title: 'BUT Informatique',
      location: 'IUT Marne-la-Vallée (UGE)',
      subtitle: "Parcours : Réalisation d'applications : conception, développement et validation",
      link: "#competences",
      linkText: "Voir les 6 compétences du BUT"
    },
    {
      year: '2020 – 2023',
      title: 'Baccalauréat Général',
      location: 'Lycée Flora Tristan',
      subtitle: 'Mention Bien | Spécialités : Mathématiques et Physique-Chimie'
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
              {item.location && <p className="location">{item.location}</p>}
              {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
              {item.details && (
                <ul className="timeline-details">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
              {item.link && (
                <a href={item.link} className="timeline-link-button">
                  {item.linkText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

