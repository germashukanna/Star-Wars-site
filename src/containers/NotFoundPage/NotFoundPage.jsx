import {useLocation} from "react-router-dom";
import img from './img/not-found.png'
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {

    let location = useLocation();

    return (
        <div>
            <img className={s.img} src={img} alt="not found"/>
            <p className={s.text}>No match for <u>{location.pathname}</u></p>
        </div>
    )
}

export default NotFoundPage