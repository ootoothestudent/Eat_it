import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateRecipeInfo extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/recipes/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, recipe: res.data})
        this.setState({
          dish: res.data.dish,
          type: res.data.type,
          ingredients: res.data.ingredients,
          description: res.data.description,
          instructions: res.data.instructions,
          nutrition: res.data.nutrition,
          tools : res.data.nutrition
        })
      })
      .catch(err => {
        console.log("Error from UpdateRecipeInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      dish: this.state.dish,
      type: this.state.type,
      ingredients: this.state.ingredients,
      description: this.state.description,
      instructions: this.state.instructions,
      nutrition: this.state.nutrition,
      tools: this.state.tools
    };

    axios
      .put('http://localhost:8082/api/recipes/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-recipe/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateRecipeInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateRecipeInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show recipe List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit recipe</h1>
              <p className="lead text-center">
                  Update recipe's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="dish">dish</label>
              <input
                type='text'
                placeholder='dish of the recipe'
                name='dish'
                className='form-control'
                value={this.state.dish}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="type">type</label>
              <input
                type='text'
                placeholder='type'
                name='type'
                className='form-control'
                value={this.state.type}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="ingredients">ingredients</label>
              <input
                type='text'
                placeholder='ingredients'
                name='ingredients'
                className='form-control'
                value={this.state.ingredients}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this recipe'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="instructions">instructions</label>
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
            <label htmlFor="nutrition">nutrition</label>
              <input
                type='text'
                placeholder='nutrition of this recipe'
                name='nutrition'
                className='form-control'
                value={this.state.nutrition}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="tools">tools</label>
              <input
                type='text'
                placeholder='tools of this recipe'
                name='tools'
                className='form-control'
                value={this.state.tools}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update recipe</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateRecipeInfo;