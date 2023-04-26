import loaderWhite from './img/Loader-white.svg'
import loaderBlack from './img/Loader-black.svg'
import loaderBlue from './img/Loader-blue.svg'
import s from './UiLoading.module.css'
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import cn from 'classnames'

const UiLoading = ({
                       theme = 'white',
                       isShadow = true,
                       classes
                   }) => {
    const [loader, setLoader] = useState(null)

    useEffect(() => {
        switch (theme) {
            case "white":
                setLoader(loaderWhite);
                break;
            case "black":
                setLoader(loaderBlack);
                break;
            case "blue":
                setLoader(loaderBlue);
                break;
            default:
                setLoader(loaderWhite);
        }
    }, [])
    return (
        <div>
            <img className={cn(s.loader, isShadow && s.shadow, classes)} src={loader} alt="loader"/>
        </div>
    )
}

UiLoading.propTypes = {
    theme: PropTypes.string,
    classes: PropTypes.string,
    isShadow: PropTypes.bool,
}

export default UiLoading