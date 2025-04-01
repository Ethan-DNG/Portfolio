import {Tool} from "./Tool";
export const ToolsList= (props:{toolList:Tool[]}) => {
    return (<div className="section-background tools"><h2>Outils</h2><ul className={"tools-list"}>

        {props.toolList.map((tool, index) => (
            <li><Tool key={index} tool={tool}/></li>
        ))}</ul></div>)
}