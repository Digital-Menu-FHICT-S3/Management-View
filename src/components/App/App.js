import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CreateFood from "../CreateFood/CreateFood";
import ManageCategories from "../ManageCategories/ManageCategories";
import ManageInventory from "../ManageInventory/ManageInventory";

function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Layout title='Manage Categories'>
                            <ManageCategories />
                        </Layout>
                    </Route>

                    <Route exact path='/createfood'>
                        <Layout title="CreateFood">
                            <CreateFood />
                        </Layout>
                    </Route>
                    <Route exact path='/managecategories'>
                        <Layout title='Manage Categories'>
                            <ManageCategories />
                        </Layout>
                    </Route>
                    <Route exact path='/manageinventory'>
                        <Layout title='Manage Inventory'>
                            <ManageInventory />
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
