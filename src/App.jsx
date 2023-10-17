import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main';
import Sidebar from './components/Sidebar';




function App() {
    /**
     * * search for recipe and add it to list log
     * * you can see stats about the recipies you got and compare stuff
     * we need sidebar for list of stuff, and main content maybe with buttons
     */

    const [recipes, setRecipes] = useState({});

    

    return (
        <>
            <Main recipes={recipes} setRecipes={setRecipes}/>
            <Sidebar recipes={recipes} setRecipes={setRecipes}/>
        </>
    )
}

export default App
