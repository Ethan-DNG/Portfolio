import { useLang } from '../context/LanguageContext';

export const Timeline = () => {
  const { t } = useLang();
  const entries = t.timeline.entries;

  return (
    <div className="timeline-container section-background" id="parcours">
      <h2 className="timeline-title">{t.timeline.title}</h2>
      <div className="timeline">
        {entries.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              {'location' in item && item.location && (
                <p className="location">{item.location}</p>
              )}
              {'subtitle' in item && item.subtitle && (
                <p className="subtitle">{item.subtitle}</p>
              )}
              {'details' in item && item.details && (
                <ul className="timeline-details">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
              {'link' in item && item.link && (
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
