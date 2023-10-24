import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const Main = ({ recipes, setRecipes, isLoading, setIsLoading }) => {
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const searchURL = `https://api.spoonacular.com/recipes/complexSearch`;
    
    const [text, setText] = useState("pizza");
    const [url, setURL] = useState(`${searchURL}?apiKey=${API_KEY}&query=${text}`);

    const handleChange = (e) => {
        setText(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        setURL(`${searchURL}?apiKey=${API_KEY}&query=${text}`);
        setIsLoading(true);
        fetchMore();
    };

    useEffect(() => { // for loading list of pizza recipies on first load
        fetchMore();
        console.log("mounted");
        setIsLoading(false);
    }, []); // empty array means only run once

    // to test if thing was set correctly since it is asychronusly going to be updated
    // useEffect(() => {  
    //     console.log(curRecipes[0].id);
    // }, [curRecipes]); 


    
    const fetchMore = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
                console.log("this is data");
                console.log(data); // check it out
            const obj = data.results;
                console.log("this is obj");
                console.log(obj); // check it out

            // use id we get from search to dig up more on each item
            const otherResponse = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${API_KEY}&ids=${obj[0].id},${obj[1].id},${obj[2].id},${obj[3].id},${obj[4].id},${obj[5].id},${obj[6].id},${obj[7].id}`);
            const otherData = await otherResponse.json();
                console.log("this is otherData");
                console.log(otherData); // check it out
                console.log(otherData[0].id); // check it out
            setRecipes(otherData); // store array
            
        } catch (error) {
            console.error('Error:', error);
        }
    }
    

    return(
        <div className="Main">
            <h1>Recipe Dash</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="text" name="text" placeholder="Search for a recipe..." onChange={handleChange}/>
            </form>
            <button type="submit" onClick={handleSubmit}>Get Recipe</button>
            <h3>Your query: {text}</h3>
            {isLoading ? ( // to make sure sutff is mapped AFTER data is loaded and set
                <div>Loading recipes...</div>
            ) : (
                <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                    <h4>{recipe.title}{"   "}</h4>
                    
                    <a href={recipe.spoonacularSourceUrl}><p>Link</p></a>
                    <img src={recipe.image} alt={recipe.title}/>
                    </li>
                ))}
                </ul>
            )}
            <button onClick={() => console.log("save")}>Save Current Recipe</button>
            <Link to="/about"><button>About Me</button></Link>
        </div>
    );
};

Main.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    setRecipes: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default Main;