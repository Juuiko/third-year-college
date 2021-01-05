import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import { ResponsiveStream } from '@nivo/stream'

class StreamCard extends Component {

  MyStream = ({ data }) => (
    <ResponsiveStream
        data={this.props.data}
        keys={this.props.keys}
        margin={{ top: 5, right: 10, bottom: 40, left: 10 }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        offsetType="none"
        order="descending"
        colors={{ scheme: 'nivo' }}
        motionConfig="stiff"
        fillOpacity={0.85}
        borderColor={{ theme: 'background' }}
    />
)

  render() {
    let graph;
    if (this.props.data === "") {
      graph = "Graph Loading . . .";
    } else {
      graph = this.MyStream(this.props.data);
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

export default StreamCard
