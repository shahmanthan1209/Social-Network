import React, {Component} from 'react';
// //import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import Loading from './Loading';

class App extends Component{
  constructor(props){
    super(props)
    //state
    this.state = {
      users: [],
      loading: false
    };
    this.handleSubmit=this.handleSubmit.bind(this);//function must be bind with this
  }

  getUsers(){
    this.setState({
      loading: true
    });
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response=> this.setState({
        users: response.data.results,
        loading: false
      })
    );
  }

handleSubmit(e){
  e.preventDefault();
  this.getUsers();
  console.log('More users loaded');
}

  componentWillMount(){ //just before component mount
    this.getUsers();
  }
  render(){
    return(
    <div className="App">
      
      {this.state.loading ? 
        (
          this.state.users.map(user=>(
            <div>
              <h3>{user.cell}</h3>
              <h2>{user.name.first}</h2>
              <p>{user.email}</p>
              <hr></hr>

              <form onSubmit={this.handleSubmit}>
                <input type="submit" value="load users" />
              </form>
            </div>
          )) 
        ) : (<Loading message="Hey hey hey" />)
      };
    </div>
    );
  }
}

export default App;
