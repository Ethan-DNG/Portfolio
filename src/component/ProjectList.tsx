import { useState } from 'react';
import { Project } from './Project';
import { useLang } from '../context/LanguageContext';

export type ProjectCategory = 'BUT1' | 'BUT2' | 'BUT3' | 'Perso';

export interface CategorizedProject extends Project {
    category: ProjectCategory;
}

interface TabConfig {
    id: ProjectCategory;
    color: string;
}

const TAB_COLORS: Record<ProjectCategory, string> = {
    BUT1: '#10b981',
    BUT2: '#06b6d4',
    BUT3: '#8b5cf6',
    Perso: '#f59e0b',
};

const TAB_ORDER: ProjectCategory[] = ['BUT1', 'BUT2', 'BUT3'];

const EmptyState = ({ id, label }: { id: ProjectCategory; label: string }) => {
    const { t } = useLang();
    const p = t.projects;
    const isPerso = id === 'Perso';

    return (
        <div className="projects-empty">
            <div className="projects-empty-icon" style={{ color: TAB_COLORS[id] }}>
                {isPerso ? '🚀' : '📂'}
            </div>
            <h3 className="projects-empty-title">
                {isPerso ? p.empty_perso_title : p.empty_generic_title(label)}
            </h3>
            <p className="projects-empty-desc">
                {isPerso ? p.empty_perso_desc : p.empty_generic_desc(label)}
            </p>
            {isPerso && (
                <div className="projects-empty-tags">
                    {p.empty_perso_tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export const ProjectList = ({ projects }: { projects: CategorizedProject[] }) => {
    const [activeTab, setActiveTab] = useState<ProjectCategory>('BUT1');
    const { t } = useLang();
    const p = t.projects;

    const filtered = projects.filter((proj) => proj.category === activeTab);
    const tabs = TAB_ORDER.map((id): TabConfig => ({ id, color: TAB_COLORS[id] }));

    return (
        <section className="section-background projects" id="projects">
            <h2>{p.title}</h2>

            {/* Tabs */}
            <div className="project-tabs">
                {tabs.map(({ id, color }) => {
                    const tab = p.tabs[id];
                    const count = projects.filter((proj) => proj.category === id).length;
                    const isActive = activeTab === id;
                    return (
                        <button
                            key={id}
                            className={`project-tab${isActive ? ' project-tab--active' : ''}`}
                            style={isActive ? ({ '--tab-color': color } as React.CSSProperties) : {}}
                            onClick={() => setActiveTab(id)}
                        >
                            <span className="project-tab-label">{tab.label}</span>
                            <span className="project-tab-sub">{tab.subtitle}</span>
                            <span
                                className="project-tab-count"
                                style={isActive ? { background: color } : {}}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Content */}
            {filtered.length === 0 ? (
                <EmptyState id={activeTab} label={p.tabs[activeTab].label} />
            ) : (
                <ul className="project-list">
                    {filtered.map((project, index) => (
                        <li key={index}>
                            <Project project={project} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};
