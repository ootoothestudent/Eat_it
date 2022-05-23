import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showRecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/recipes/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showRecipeDetails-API-response: " + res.data);
        this.setState({
          recipe: res.data
        })
      })
      .catch(err => {
        console.log("Error from showRecipeDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/recipes/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form showRecipeDetails_deleteClick");
      })
  };


  render() {

    const recipe = this.state.recipe;
    let recipeItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Dish</td>
            <td>{ recipe.dish }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Type</td>
            <td>{ recipe.type }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Ingredients</td>
            <td>{ recipe.ingredients }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Nutrition</td>
            <td>{ recipe.nutrition }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Instructions </td>
            <td>{ recipe.instructions }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ recipe.description }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Tools</td>
            <td>{ recipe.tools }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="showRecipeDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show recipe List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">recipe's Record</h1>
              <p className="lead text-center">
                  View recipe's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { recipeItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,recipe._id)}>Delete recipe</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-recipe/${recipe._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit recipe
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit recipe</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete recipe</button> */}

        </div>
      </div>
    );
  }
}

export default showRecipeDetails;