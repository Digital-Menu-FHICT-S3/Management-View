import React from 'react';
import {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'
import IngredientSelector from "./IngredientSelector";

const IngredientDetails = ({selectedIngredients, onIngredientChange}) => {
    const [ingredients, setIngredients] = useState([])

    //Fill Ingredients With Placeholders
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                setIngredients(res.data)
                console.log(res)
            })
            .catch(err => {
                console.log("Error: " + err)
            })
    }, [])

    const addNewIngredient = () => {
        onIngredientChange(selectedIngredients => [...selectedIngredients, {
            name: ingredients[0].title,
            amount: 0
        }]);
    }

    const changeSelector = (index, value) => {
        selectedIngredients[index].name = value
        onIngredientChange([...selectedIngredients])

        console.log(index)
        console.log(value)
        console.log(selectedIngredients)
    }

    const changeAmount = (index, value) => {
        selectedIngredients[index].amount = parseInt(value)
        onIngredientChange([...selectedIngredients])
    }

    const deleteIngredient = (index) => {
        selectedIngredients.splice(index ,1);
        onIngredientChange([...selectedIngredients]);
    }


    return (
        <Row>
            <Col>
                <div className="ingredientDetails">
                    <label for="inputPassword2" className="sr-only"> Ingredients </label>
                    {selectedIngredients.map((ingredient, index) => (
                        <IngredientSelector
                            index={index}
                            value={ingredient.name}
                            ingredients={ingredients}
                            deleteIngredient={deleteIngredient}
                            onSelectorChange={changeSelector}
                            onAmountChange={changeAmount}
                        />
                    ))}
                </div>
                <div className="divContainerIngredients">
                    <div className="addIngredients">
                        <button className="btn btn-default btn-lg" onClick={() => addNewIngredient()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                <path
                                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default IngredientDetails;
