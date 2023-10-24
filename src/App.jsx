import { useEffect, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.css'
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Oops from './components/Oops';





function App() {
    /**
     * * search for recipe and add it to list log
     * * you can see stats about the recipies you got and compare stuff
     * we need sidebar for list of stuff, and main content maybe with buttons
     */

    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Main recipes={recipes} setRecipes={setRecipes} isLoading={isLoading} setIsLoading={setIsLoading}/>
                            <Sidebar recipes={recipes} setRecipes={setRecipes} isLoading={isLoading}/>
                        </>
                    }/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<Oops/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
