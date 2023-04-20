import {useNavigate} from "react-router-dom";
import s from './PersonLinkBack.module.css'
import iconBack from './img/back.svg'



const PersonLinkBack = () => {
    const history = useNavigate()

    const handleGoBack = (e) => {
        e.preventDefault();
        history(-1)
    }

    return (
        <a href={'#'}
           onClick={handleGoBack}
           className={s.link}
        >
            <img className={s.link__img} src={iconBack} alt="GoBack"/>
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack