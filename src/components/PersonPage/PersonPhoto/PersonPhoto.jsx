import PropTypes from "prop-types";
import s from './PersonPhoto.module.css'
import {useDispatch} from "react-redux";
import {removePersonToFavorite, setPersonToFavorite} from "../../../store/actions";


const PersonPhoto = ({
                         personPhoto, personName, personId,
                         personFavorite, setsPersonFavorite
                     }) => {
    const dispatch = useDispatch();

    const set = () => {
        dispatch(setPersonToFavorite({
            [personId]: {
                name: personName,
                img: personPhoto
            }
        }))
        setsPersonFavorite(true)
    }

    const remove = () => {
        dispatch(removePersonToFavorite(personId))
        setsPersonFavorite(false)
    }

    return (
        <div className={s.container}>
            <img className={s.photo} src={personPhoto} alt={personName}/>
            {personFavorite
                ? <button onClick={remove}>Удалить из избранное</button>
                : <button onClick={set}>Добавить в избранное</button>
            }
        </div>
    )
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setsPersonFavorite: PropTypes.func,
}

export default PersonPhoto