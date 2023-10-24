import react, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';



const Sidebar = ({ recipes, setRecipes, isLoading }) => {

    useEffect(() => { 
        console.log("sidebar refresh");
    }, [recipes]);

    const calcTime = () => {
        let sum = 0;
        for (let i = 0; i < recipes.length; i++) {
            sum += recipes[i].readyInMinutes;
        }
        console.log(`calcTime: sum = ${sum}`)
        return <p>{String(sum / recipes.length)}</p>;
    }

    const calcIngredients = () => {
        let sum = 0;
        for (let i = 0; i < recipes.length; i++) {
            sum += recipes[i].extendedIngredients.length;
        }
        console.log(`calcIngred: sum = ${sum}`)
        return <p>{String(sum / recipes.length)}</p>;
    }

    return(
        <div className="Sidebar">
            <h3>Stats</h3>
            {isLoading ? (<p>Loading...</p>) : (
                <>
                    <p>Number of Recipes: {recipes.length}</p>
                    <p>Average Time to Cook: {recipes.length > 0 ? calcTime() : 15} minutes</p>
                    <p>Average Num of Ingredients: {recipes.length > 0 ? calcIngredients() : 2} ingredients</p>
                </>
            )}
        </div>
    );
};

Sidebar.propTypes = {
    recipes: PropTypes.arrayOf( PropTypes.shape({
        readyInMinutes: PropTypes.number.isRequired, 
        extendedIngredients: PropTypes.arrayOf( PropTypes.shape({
                length: PropTypes.number,})
            ).isRequired,})
        ),
    isLoading: PropTypes.bool.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default Sidebar;