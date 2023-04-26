import PropTypes from "prop-types";
import React, {Suspense, useEffect, useState} from "react";
import {getApiResource} from "../../utils/network";
import {API_PERSON} from "../../constants/api";
import {useParams} from "react-router-dom";
import {withErrorApi} from "../../hok/whithErrorApi";
import {getPeopleImage} from "../../services/getPeopleData";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import s from './PersonPage.module.css'
import PersonLinkBack from "../../components/PersonLinkBack";
import UiLoading from "../../components/Ui/UiLoading";

const PersonFilms = React.lazy(() => import("../../components/PersonPage/PersonFilms"))


const PersonPage = ({setErrorApi}) => {

    const {id} = useParams();

    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`)

            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair color', data: res.hair_color},
                    {title: 'Skin color', data: res.skin_color},
                    {title: 'Eye color', data: res.eye_color},
                    {title: 'Birth year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ])
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))

                res.films.length && setPersonFilms(res.films)

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })();

    }, [])

    return (
        <>
            <PersonLinkBack/>
            <div className={s.wrapper}>
                <span className={s.person__name}>{personName}</span>
                <div className={s.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                    {personFilms && (
                        <Suspense fallback={<UiLoading theme={'white'}/>}>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                        )}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage)