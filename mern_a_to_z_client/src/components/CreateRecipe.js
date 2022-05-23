import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateRecipe extends Component {
  constructor() {
    super();
    this.state = {
      dish:'',
      type:'',
      ingredients:[''],
      description:'',
      instructions:[''],
      nutrition:[''],
      tools:['']
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      dish: this.state.dish,
      type:this.state.type,
      ingredients:this.state.ingredients,
      description:this.state.description,
      instructions:this.state.ingredients,
      nutrition:this.state.nutrition,
      tools:this.state.tools
    };

    axios
      .post('http://localhost:8082/api/recipes', data)
      .then(res => {
        this.setState({
          dish:'',
          type:'',
          ingredients:[''],
          description:'',
          instructions:[''],
          nutrition:[''],
          tools:['']
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateRecipe!");
      })
  };

  render() {
    return (
      <div className="CreateRecipe">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Recipe List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Recipe</h1>
              <p className="lead text-center">
                  Create new Recipe
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Recipe'
                    name='dish'
                    className='form-control'
                    value={this.state.dish}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Type'
                    name='type'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Ingredients'
                    name='ingredients'
                    className='form-control'
                    value={this.state.ingredients}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this Recipe'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='instructions'
                    name='instructions'
                    className='form-control'
                    value={this.state.instructions}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='nutritional value of this Recipe'
                    name='nutrition'
                    className='form-control'
                    value={this.state.nutrition}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='tools to cook this Recipe'
                    name='tools'
                    className='form-control'
                    value={this.state.tools}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRecipe;