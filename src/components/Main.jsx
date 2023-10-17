import react, { useEffect, useState } from 'react';

const Main = ({ recipes, setRecipes }) => {
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const searchURL = `https://api.spoonacular.com/recipes/complexSearch`;
    
    const [text, setText] = useState("pizza");
    const [url, setURL] = useState(`${searchURL}?apiKey=${API_KEY}&query=${text}`);
    const [curRecipes, setCurRecipes] = useState({}); // stores list of recipe objects

    const handleChange = (e) => {
        setText(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        setURL(`${searchURL}?apiKey=${API_KEY}&query=${text}`);
        fetchMore();
    };

    useEffect(() => { // for loading list of pizza recipies on first load
        fetchMore();
        console.log("mounted");
    }, []); // empty array means only run once

    
    const fetchMore = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const obj = data.results;
            // use id we get from search to dig up more on each item
            const otherResponse = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${API_KEY}&ids=${obj[0].id},${obj[1].id},${obj[2].id},${obj[3].id},${obj[4].id},${obj[5].id},${obj[6].id},${obj[7].id}`);
            const otherData = await otherResponse.json();
            console.log(otherData); // check it out
            let arr = [];
            for (let i = 0; i <= 7; i++) { // convert object to array we can use map on
                if (otherData) {
                    arr[i] = otherData[i];
                }
            }
            setCurRecipes(arr); // store array
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
            <ul>
                {Array(curRecipes).map((recipe) => ( // maping out all the recipes
                    <li key={recipe.id}>
                        {"filler list item"}
                        {recipe.title}
                        <img src={recipe.image} />
                    </li>
                ))}
            </ul>


            
            <button onClick={() => console.log("save")}>Save Current Recipe</button>
        </div>
    );
};

export default Main;