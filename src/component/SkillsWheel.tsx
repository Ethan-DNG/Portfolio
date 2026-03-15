import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { Skill } from './Skill';

// ─── Colors (consistent by index) ────────────────────────────────────────────
const COLORS = [
    '#10b981', '#f97316', '#eab308',
    '#22c55e', '#3b82f6', '#6b7280',
];

// ─── SVG helpers ─────────────────────────────────────────────────────────────
const GAP_DEG = 5;

function polar(cx: number, cy: number, r: number, deg: number) {
    const a = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function arc(cx: number, cy: number, ri: number, ro: number, s: number, e: number) {
    const p1 = polar(cx, cy, ro, s), p2 = polar(cx, cy, ro, e);
    const p3 = polar(cx, cy, ri, e), p4 = polar(cx, cy, ri, s);
    const la = e - s > 180 ? 1 : 0;
    return [
        `M ${p1.x} ${p1.y}`,
        `A ${ro} ${ro} 0 ${la} 1 ${p2.x} ${p2.y}`,
        `L ${p3.x} ${p3.y}`,
        `A ${ri} ${ri} 0 ${la} 0 ${p4.x} ${p4.y}`,
        'Z',
    ].join(' ');
}

// ─── SVG dimensions ───────────────────────────────────────────────────────────
const VW = 640, VH = 580;
const CX = VW / 2, CY = VH / 2;
const IR = 88, OR = 170, LR = 215, DR = OR + 10;

// ─── Component ───────────────────────────────────────────────────────────────
export const SkillsWheel = ({ skills: _unused }: { skills: Skill[] }) => {
    const { t } = useLang();
    const sk = t.skills;

    const [butIndex, setButIndex] = useState(0);
    const [activeSkill, setActiveSkill] = useState<(typeof sk.butYears)[0]['skills'][0] | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);

    const currentBut = sk.butYears[butIndex];
    const skills = currentBut.skills;
    const count = skills.length;
    const segDeg = 360 / count;

    return (
        <section className="section-background skills" id="competences">
            <h2>{sk.title}</h2>
            <p className="skills-intro">{sk.hint}</p>

            {/* BUT year selector */}
            <div className="but-selector">
                {sk.butYears.map((y, i) => (
                    <button
                        key={y.label}
                        className={`but-btn${butIndex === i ? ' but-btn--active' : ''}`}
                        onClick={() => { setButIndex(i); setActiveSkill(null); setHovered(null); }}
                    >
                        <span className="but-btn-label">{y.label}</span>
                        <span className="but-btn-sub">{y.subtitle}</span>
                    </button>
                ))}
            </div>

            <div className="skills-wheel-wrapper">
                {/* SVG wheel */}
                <svg
                    viewBox={`0 0 ${VW} ${VH}`}
                    width="100%"
                    style={{ maxWidth: 540, display: 'block', margin: '0 auto', overflow: 'visible' }}
                    aria-label={`${sk.title} — ${currentBut.label}`}
                >
                    <circle cx={CX} cy={CY} r={OR + 22} fill="var(--skills-wheel-bg, rgba(255,255,255,0.025))" />

                    {skills.map((skill, i) => {
                        const start = i * segDeg + GAP_DEG / 2;
                        const end = (i + 1) * segDeg - GAP_DEG / 2;
                        const mid = (start + end) / 2;
                        const color = COLORS[i % COLORS.length];
                        const isHov = hovered === i;
                        const lp = polar(CX, CY, LR, mid);
                        const dp = polar(CX, CY, DR, mid);

                        return (
                            <g
                                key={skill.name}
                                onClick={() => setActiveSkill(skill)}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                style={{ cursor: 'pointer' }}
                            >
                                <path
                                    d={arc(CX, CY, isHov ? IR - 5 : IR, isHov ? OR + 7 : OR, start, end)}
                                    fill={color}
                                    opacity={isHov ? 1 : 0.78}
                                    style={{ transition: 'opacity 0.2s' }}
                                />
                                <line x1={dp.x} y1={dp.y} x2={lp.x} y2={lp.y}
                                    stroke={color} strokeWidth={isHov ? 1.5 : 1} opacity={isHov ? 0.7 : 0.35} />
                                <circle cx={dp.x} cy={dp.y} r={isHov ? 5 : 3.5}
                                    fill={color} opacity={isHov ? 1 : 0.6} />
                                <text
                                    x={lp.x + (lp.x >= CX ? 8 : -8)}
                                    y={lp.y + 5}
                                    textAnchor={lp.x >= CX ? 'start' : 'end'}
                                    fill={isHov ? color : 'var(--text-primary)'}
                                    fontSize="13.5" fontWeight={isHov ? '700' : '600'}
                                    fontFamily="'Space Grotesk', sans-serif"
                                    style={{ transition: 'fill 0.2s' }}
                                >
                                    {skill.name}
                                </text>
                            </g>
                        );
                    })}

                    {/* Center */}
                    <circle cx={CX} cy={CY} r={IR - 6}
                        fill="var(--bg-primary)" stroke="var(--border-subtle)" strokeWidth="1.5" />
                    <text x={CX} y={CY - 18} textAnchor="middle"
                        fill="var(--text-muted)" fontSize="10" fontWeight="600"
                        fontFamily="'Space Grotesk', sans-serif" letterSpacing="0.14em">
                        {sk.center_top}
                    </text>
                    <text x={CX} y={CY + 4} textAnchor="middle"
                        fill="var(--text-primary)" fontSize="14" fontWeight="700"
                        fontFamily="'Space Grotesk', sans-serif">
                        {currentBut.centerMiddle}
                    </text>
                    <text x={CX} y={CY + 22} textAnchor="middle"
                        fill="var(--text-muted)" fontSize="10" fontFamily="'Inter', sans-serif">
                        {currentBut.centerBottom}
                    </text>
                </svg>

                {/* Legend */}
                <div className="skills-legend">
                    {skills.map((skill, i) => {
                        const color = COLORS[i % COLORS.length];
                        return (
                            <button
                                key={skill.name}
                                className="skill-legend-item"
                                onClick={() => setActiveSkill(skill)}
                                style={{ '--skill-color': color } as React.CSSProperties}
                            >
                                <span className="skill-legend-name">{skill.name}</span>
                                <span className="skill-legend-desc">{skill.shortDescription}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {activeSkill && (() => {
                const idx = skills.findIndex((s) => s.name === activeSkill.name);
                const color = COLORS[Math.max(idx, 0) % COLORS.length];
                return (
                    <div className="full-screen-skill" onClick={() => setActiveSkill(null)}>
                        <section onClick={(e) => e.stopPropagation()}>
                            <button className="close-modal-button" onClick={() => setActiveSkill(null)}>✕</button>
                            <div
                                className="modal-skill-badge"
                                style={{ background: color + '18', borderColor: color + '50', color }}
                            >
                                {currentBut.label} · {sk.badge}
                            </div>
                            <h3>{activeSkill.name}</h3>
                            <p>{activeSkill.description}</p>
                            {activeSkill.projects.length > 0 && (
                                <div className="skill-projects">
                                    <h4>{sk.related}</h4>
                                    <ul>
                                        {activeSkill.projects.map((p, i) => <li key={i}>{p}</li>)}
                                    </ul>
                                </div>
                            )}
                        </section>
                    </div>
                );
            })()}
        </section>
    );
};
