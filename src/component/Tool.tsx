import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";


export interface Tool{
    name: string;
    img: IconDefinition;
}
export const Tool = (props:{tool:Tool})=>{
    return (<>
        <div className="tool">
            <figure><FontAwesomeIcon icon={props.tool.img} size="2xl" color={"white"} /></figure>
            <p>{props.tool.name}</p>
        </div>
    </>)
}