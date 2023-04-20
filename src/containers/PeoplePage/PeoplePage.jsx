import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {withErrorApi} from "@hok/whithErrorApi";
import PeopleList from "@components/PeoplePage";
import {getApiResource} from "@utils/network";
import {getPeopleId, getPeopleImage} from "@services/getPeopleData";
import {API_PEOPLE} from "@constants/api";
import {useQueryParams} from "../../hooks/useQueryParams";
import {changeHTTP} from "../../utils/network";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";


const PeoplePage = ({setErrorApi}) => {

    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)

    const query = useQueryParams()
    const queryPage = query.get('page')

    const getResponse = async (url) => {
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
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeopleId(url))
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }

    }

    useEffect(() => {
        getResponse(API_PEOPLE + queryPage);
    }, [])

    return (
        <div>
            <h1 className={'header__text'}>Navigation</h1>
            <PeopleNavigation
                getResponse={getResponse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people}/>}
        </div>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)