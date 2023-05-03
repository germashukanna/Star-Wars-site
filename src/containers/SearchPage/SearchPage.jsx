import {useCallback, useEffect, useState} from "react";
import {getApiResource} from "../../utils/network";
import {API_SEARCH} from "../../constants/api";
import {withErrorApi} from "../../hok/whithErrorApi";
import PropTypes from "prop-types";
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
import {debounce} from "lodash";
import UiInput from "../../components/Ui/UiInput";
import s from './SearchPage.module.css'


const SearchPage = ({setErrorApi}) => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param)

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(()=> {
        getResponse('');

    }, [])

    const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    const handleInputChange = (value) => {
        setInputSearchValue(value);
        debounceGetResponse(value)
    }

    return (
        <div>
            <h1 className={"header__text"}></h1>
            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder={"Input character's name"}
                classes={s.input__search}
            />
            <SearchPageInfo people={people}/>
        </div>
    )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage)