import {THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme} from "../../../context/ThemeProvider";
import s from './ChooseSide.module.css'
import imgLiteSide from './img/green-side.jpg'
import imgDarkSide from './img/red-side.jpg'
import imgFalcon from './img/millennialf_02554c5b12542606.jpg'
import PropTypes from "prop-types";
import cn from 'classnames'

const ChooseSideItem = ({theme, text, img, classes}) => {
    const isTheme = useTheme()
    return (
        <div className={cn(s.item, classes)}
             onClick={() => isTheme.change(theme)}>
            <div className={s.item__header}>{text}</div>
            <img className={s.item__img} src={img} alt={text}/>
        </div>
    )
}

ChooseSideItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string,

}

const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light Side',
            img: imgLiteSide,
            classes: s.item__light
        },
        {
            theme: THEME_DARK,
            text: 'Dark Side',
            img: imgDarkSide,
            classes: s.item__dark
        },
        {
            theme: THEME_NEITRAL,
            text: "I'm Han Solo",
            img: imgFalcon,
            classes: s.item__neitral
        },
    ]

    return (
        <div className={s.container}>
            {elements.map(({theme, text, img, classes}, index) => (
                <ChooseSideItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide