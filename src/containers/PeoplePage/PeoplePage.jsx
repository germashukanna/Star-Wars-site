import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {withErrorApi} from "@hok/whithErrorApi";
import PeopleList from "@components/PeoplePage";
import {getApiResource} from "@utils/network";
import {getPeopleId, getPeopleImage} from "@services/getPeopleData";
import {API_PEOPLE} from "@constants/api";
import {useQueryParams} from "../../hooks/useQueryParams";



const PeoplePage = ({setErrorApi}) => {

    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [next, setNext] = useState(null)

    const query = useQueryParams()
    const queryPage = query.get('page')

    const getResource = async (url) => {
        const res = await getApiResource(url);
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
            setPrevPage(res.previous)
            setNext(res.next)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }

    }

    useEffect(() => {
        getResource(API_PEOPLE+queryPage);
    }, [queryPage])

    return (
        <div>
            <h1 className={'header__text'}>Navigation</h1>
            {people && <PeopleList people={people}/>}
        </div>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)