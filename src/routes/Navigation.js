import {NavLink} from "react-router-dom";
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list__container}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/people/?page=1'}>People</NavLink></li>
                <li><NavLink to={'/not-found'}>Not found</NavLink></li>

                <li><NavLink to={'/favorites'}>Favorites</NavLink></li>
            </ul>
        </nav>
    )
}