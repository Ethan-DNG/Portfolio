import { useLang } from '../context/LanguageContext';
import { Tool } from './Tool';

export const ToolsList = (props: { toolList: Tool[] }) => {
    const { t } = useLang();
    return (
        <div className="section-background tools" id="stack">
            <h2>{t.tools.title}</h2>
            <ul className="tools-list">
                {props.toolList.map((tool, index) => (
                    <li key={index}>
                        <Tool tool={tool} />
                    </li>
                ))}
            </ul>
        </div>
    );
};