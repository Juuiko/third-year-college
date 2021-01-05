import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst'

class SunCard extends Component {

  MySun = ({ data }) => (
    <ResponsiveSunburst
        data={this.props.data}
        margin={{ top: 10, right: 20, bottom: 30, left: 20 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderWidth={1}
        borderColor="white"
        colors={{ scheme: 'nivo' }}
        childColor={{ from: 'color' }}
        animate={false}
        motionConfig="gentle"
        isInteractive={true}
    />
)

  render() {
    let graph;
    if (this.props.data === "") {
      graph = "Graph Loading . . .";
    } else {
      graph = this.MySun(this.props.data);
    }
    return (
      <Card className="graph-card" style={{height: '420px'}}>
        <Card.Body>
          <Card.Title className="card-title">{this.props.title}</Card.Title>
            {graph}        
          </Card.Body>
      </Card>
    )
  }
}

export default SunCard
