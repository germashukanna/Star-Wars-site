import {useSelector} from "react-redux";
import favoriteReducer from "../../store/reducers/favoriteReducer";


const FavoritesPage = () => {
    const storeDate = useSelector(state => state.favoriteReducer)
    return (
        <div>

        </div>
    )
}

export default FavoritesPage