import s from './UiButton.module.css'
import PropTypes from "prop-types";
import cn from "classnames";

import '../index.css'


const UiButton = ({
                      text,
                      onClick,
                      disabled,
                      theme = 'dark',
                      classes,
                  }) => {
    return (
        <div>
            <button
                onClick={onClick}
                disabled={disabled}
                className={cn(s.buttons, s[theme], classes)}
            >{text}</button>
        </div>
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string
}

export default UiButton