import PropTypes from 'prop-types';

import s from './PeopleList.module.css'


const PeopleList = ({people}) => {
    return (
        <ul className={s.list__container}>
            {people.map(({id, name, img}) =>
                <li className={s.list__item} key={id}>
                    <a href={''}>
                        <img className={s.person__photo} src={img} alt={name}/>
                        <p>{name}</p>
                    </a>
                </li>
            )}
        </ul>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList

