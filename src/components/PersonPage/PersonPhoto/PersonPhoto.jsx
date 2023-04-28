import PropTypes from "prop-types";
import s from './PersonPhoto.module.css'
import {useDispatch} from "react-redux";
import {removePersonToFavorite, setPersonToFavorite} from "../../../store/actions";
import star from './img/star.png'
import starBlack from './img/start-black.png'

const PersonPhoto = ({
                         personPhoto, personName, personId,
                         personFavorite, setsPersonFavorite
                     }) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonToFavorite(personId))
            setsPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }))
            setsPersonFavorite(true)
        }

    }

    return (
        <>
            <div className={s.container}>
                <img className={s.photo} src={personPhoto} alt={personName}/>
                <img
                    className={s.favorite}
                    src={personFavorite ? star : starBlack}
                    alt={personFavorite ? 'delete to favorite' : 'add to favorite'}
                    onClick={dispatchFavoritePeople}
                />
            </div>
        </>
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