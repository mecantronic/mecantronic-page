// @ts-nocheck
import "./SecondNavbar.css"
import { Link } from "react-scroll";

export const SecondNavbar = ({data})=>{

    setTimeout(()=>{
        let secondNav = document.getElementById("secondNav");
        let sticky = secondNav.offsetTop;  
        window.onscroll = ()=>{      
            if (window.pageYOffset*1.75>= sticky) {
                secondNav.classList.add("sticky")
            } else {
                secondNav.classList.remove("sticky");
            }
        }
    },500)


    return (
        <div className='serviciosNavContainer' id="secondNav">
            <div className='serviciosNav'>     
                { data.map(el=>{
                    return (
                        <Link   activeClass="serviciosNav-active"
                                to={`${el.link}`}
                                spy={true}
                                smooth='easeOutCubic'
                                offset={0}
                                duration={500}
                                isDynamic={true} >
                                <div key={el.index}><p>{el.texto}</p></div>
                        </Link>                    
                    )
                })}
            </div>
        </div>
    )
}