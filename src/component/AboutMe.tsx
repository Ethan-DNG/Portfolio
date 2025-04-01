export const AboutMe = (props:{img:string,text:string,cv:string}) => {
    return (
        <>
            <section id="apropos" className="section-background aboutme">
                <h2>À propos</h2>
                <div className="content">
                    <figure><img src={props.img} alt={"Ethan Duong"}/></figure>
                <div className="text">
                    <p>{props.text}</p>
                    <button><a href={props.cv}>Mon CV</a></button>
                </div>
                </div>
            </section>
        </>
    )
}