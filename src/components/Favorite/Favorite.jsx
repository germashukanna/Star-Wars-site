import icon from './img/bookmark.svg'
import s from './Favorite.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Favorite = () => {
    const [count, setCount] = useState(0)

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length)
          })

    return (
        <div className={s.container}>
            <Link to="/favorites">
                <span className={s.counter}>{count}</span>
                <img className={s.icon} src={icon} alt="Favorites" />
            </Link>
        </div>
    )
}

export default Favorite