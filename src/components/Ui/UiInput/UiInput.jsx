import PropTypes from "prop-types";
import cn from 'classnames'
import icon from './img/remove.png'
import '../index.css'
import s from './UiInput.module.css'


const UiInput = ({value, handleInputChange, placeholder, classes}) => (
    <div className={cn(s.wrapper__input, classes)}>
        <input
            type={'text'}
            value={value}
            onChange={(e)=> handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={s.input}
        />
        <img
            onClick={() => value && handleInputChange('')}
            src={icon}
            alt="clear"
            className={cn(s.clear, !value && s.clear__disabled)}
        />
    </div>
)


UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
}

export default UiInput