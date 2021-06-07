import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CreateFood from "../CreateFood/CreateFood";
import ManageCategories from "../ManageCategories/ManageCategories";
import ManageInventory from "../ManageInventory/ManageInventory";
import "./App.sass";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Layout title='Manage Categories'>
                        <ManageCategories/>
                    </Layout>
                </Route>

                <Route exact path='/add-dish'>
                    <Layout title="Add Dish">
                        <CreateFood/>
                    </Layout>
                </Route>
                <Route exact path='/manage-categories'>
                    <Layout title='Manage Categories'>
                        <ManageCategories/>
                    </Layout>
                </Route>
                <Route exact path='/manage-inventory'>
                    <Layout title='Manage Inventory'>
                        <ManageInventory/>
                    </Layout>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
