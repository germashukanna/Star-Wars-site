import s from '../styles/index.css'
import ChooseSide from "../components/HomePage/ChooseSide";

const HomePage = () => {
    return (
        <div>
            <h1 className={'header__text'}>Home Page</h1>
            <ChooseSide/>
        </div>
    )
}

export default HomePage