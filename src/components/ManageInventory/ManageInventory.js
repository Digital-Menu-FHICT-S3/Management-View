import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import axios from "axios";
import { useForm } from "react-hook-form"

const ALL_INGREDIENTS = "http://localhost:9191/ingredient/all";
const REMOVE_INGREDIENT = "http://localhost:9191/ingredient/delete";
const CREATE_INGREDIENT = "http://localhost:9191/ingredient/create";

function ManageInventory() {
    const { register, handleSubmit } = useForm();

    const OnRemove = (ingredientId) => {
        setIngredients(ingredients.filter(i => i.ingredientId !== ingredientId));

        axios.delete(REMOVE_INGREDIENT + "/" + ingredientId);
    }


    const OnAdd = (props) => {
        var ingredientObject = {name: props.Name};
        axios.post(CREATE_INGREDIENT, ingredientObject);
    }

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchIngredients = async () => {
            const result = await axios.get(ALL_INGREDIENTS);
            return result.data;
        }
        fetchIngredients().then(r => setIngredients(r));
    }, []);

    return (
        <div>
            <Container >
                <Row>
                    <Col>
                        {ingredients.map((ingredient) => (
                            <Row>
                                <Col className='Column' sm={1}>
                                    <button className='btn btn-danger' onClick={() => OnRemove(ingredient.ingredientId)}>X</button>
                                </Col>
                                <Col className='Column' sm={11}>
                                    <label>{ingredient.name}</label>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit(OnAdd)}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="Name" ref={register} />
                            </Form.Group>
                            <div className="buttonContainer">
                                <div className="divButtons">
                                    <button type="submit" className="btn btn-primary" >Add</button>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ManageInventory
