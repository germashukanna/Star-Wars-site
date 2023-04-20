import PropTypes from "prop-types";
import {useEffect} from "react";
import {getApiResource} from "../../utils/network";
import {API_PERSON} from "../../constants/api";
import {useParams} from "react-router-dom";


const PersonPage = () => {

    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`)
        })();

    }, [])

    return (
        <div>
            {id}
        </div>
    )
}

PersonPage.propTypes = {
    // match: PropTypes.string,

}

export default PersonPage