import React from 'react';
import DataGrid from './DataGrid.js';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      companies: []
    };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            companies: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  // Fetches GET route from the Express server
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {

    return (
      <div className="app">
        <DataGrid companies={this.state.companies.express}/>
      </div>
    );
  }
}

export default App;
