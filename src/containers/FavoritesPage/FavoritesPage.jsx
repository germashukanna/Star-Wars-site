import {useSelector} from "react-redux";
import favoriteReducer from "../../store/reducers/favoriteReducer";
import {useEffect, useState} from "react";
import PeopleList from "../../components/PeoplePage";
import s from './FavoritesPage.module.css'


const FavoritesPage = () => {
    const [people, setPeople] = useState([])

    const storeDate = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(storeDate)
        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setPeople(res)
        }
    }, [])

    return (
        <div>
            <h1 className={'header__text '}>FavoritesPage</h1>
            {people.length
                ? <PeopleList people={people}/>
                : <h2 className={s.comment}>No data</h2>
            }
        </div>
    )
}

export default FavoritesPage