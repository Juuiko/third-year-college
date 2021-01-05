import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoadingOverlay from 'react-loading-overlay';

import CardDeck from 'react-bootstrap/CardDeck'
import PieCard from '../components/pie-card'
import SunCard from '../components/sunburst-card'
import StreamCard from '../components/stream-card'
import Bar from '../components/navbar'

class UserPage extends Component {

  constructor() {
    super()
    this.state = {
      loadingText: "Loading . . .",
      isActive: true,
      dataPie: "",
      dataSun: "",
      dataStream: "",
      dataStreamKeys: ""
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.location.searchText !== this.props.location.searchText) {
      this.setState({ dataPie: "" });
      this.setState({ dataSun: "" });
      this.setState({ dataStream: "" });
      this.setState ({ isActive: true });
      this.setState ({dataStreamKeys: "" });
      this.fetchData();
    }
  }

  async fetchData() {
    // Simple GET request using fetch
    console.log(this.props.location.searchText)
    if (this.props.location.searchText === undefined) {
      this.setState({ loadingText: "undefined user name, please try another" });
    } else {
      const response = await fetch('https://dry-meadow-51924.herokuapp.com/api?user=' + this.props.location.searchText);
      const data = await response.json(); 
      this.setState({ dataPie: data.pie });
      this.setState({ dataSun: {"name":"chart", "children":data.sun} });
      this.setState({ dataStream: data.stream });
      this.setState ({ isActive: false });
      this.setState ({dataStreamKeys: Object.keys(this.state.dataStream.[0])});
    }
  }

  

  render() {
    return (
      <div className="container-fluid">
           <Bar text={this.props.location.searchText}/>
           <LoadingOverlay
             active={this.state.isActive}
             spinner
             text={this.state.loadingText}
             >
           <div className="container-fluid">
           <CardDeck className="deck">
           <PieCard
           title="Overall language distribution"
           history={this.props.history}
           graph="test"
           data={this.state.dataPie}
           />
           <SunCard
           title="Language in each repo"
           history={this.props.history}
           graph="test"
           data={this.state.dataSun}
           />
           </CardDeck>
           <CardDeck className="deck">
           <StreamCard
           title="Account codebase evolution over time"
           history={this.props.history}
           graph="test"
           data={this.state.dataStream}
           keys={this.state.dataStreamKeys}
           />
           </CardDeck>
           </div>           
          </LoadingOverlay>
      </div>
    )
  }
}

export default UserPage
