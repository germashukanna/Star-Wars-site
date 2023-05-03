import {NavLink} from "react-router-dom";
import s from './Navigation.module.css'
import Favorite from "../components/Favorite";
import {THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme} from "../context/ThemeProvider";

import imgDroid from './img/droid.png'
import imgSaber from './img/lightsaber.png'
import imgStation from './img/space-station (1).png'

import {useEffect, useState} from "react";

export const Navigation = () => {
    const isTheme = useTheme()
    const [icon, setIcon] = useState(imgStation)
    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(imgSaber);
                break;
            case THEME_DARK:
                setIcon(imgStation);
                break;
            case THEME_NEITRAL:
                setIcon(imgDroid);
                break;
            default:
                setIcon(imgStation)
        }
    }, [isTheme])

    return (
        <nav className={s.nav}>
            <ul className={s.list__container}>
                <img className={s.logo} src={icon} alt={'Star Wars'}/>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/people/?page=1'}>People</NavLink></li>
                <li><NavLink to={'/search'}>Search</NavLink></li>
                <li><NavLink to={'/not-found'}>Not found</NavLink></li>
                <Favorite/>
            </ul>
        </nav>
    )
}