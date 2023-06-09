import React from 'react';
import PeoplePage from "@containers/PeoplePage";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../HomePage";
import {Navigation} from "@routes/Navigation";
import s from './App.module.css'
import NotFoundPage from "../NotFoundPage";
import PersonPage from "../PersonPage";
import FavoritesPage from "../FavoritesPage";
import SearchPage from "../SearchPage";
import ErrorMessage from "../../components/ErrorMessage";


const App = () => {
    return (
        <div className={s.wrapper}
            // className={cn(s.header, s.text)}
        >
            <Navigation/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/people'} element={<PeoplePage/>}/>
                <Route path={'/people/:id'} element={<PersonPage/>}/>
                <Route path={'/favorites'} element={<FavoritesPage/>}/>
                <Route path={'/search'} element={<SearchPage/>}/>
                <Route path={'/fail'} element={<ErrorMessage/>}/>
                <Route path={'/not-found'} element={<NotFoundPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
