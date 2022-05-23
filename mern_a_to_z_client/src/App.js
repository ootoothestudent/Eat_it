import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


 import CreateRecipe from './components/CreateRecipe';
 import ShowRecipeList from './components/ShowRecipeList';
 import ShowRecipeDetails from './components/ShowRecipeDetails';
 import UpdateRecipeInfo from './components/UpdateRecipeInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          

          <Route exact path='/' component={ShowRecipeList} />
          <Route path='/create-recipe' component={CreateRecipe} />
          <Route path='/edit-recipe/:id' component={UpdateRecipeInfo} />
          <Route path='/show-recipe/:id' component={ShowRecipeDetails} />
        </div>
      </Router>
    );
  }
}

export default App;