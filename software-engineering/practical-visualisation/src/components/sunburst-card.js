import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst'

class PieCard extends Component {

  MySun = ({ data }) => (
    <ResponsiveSunburst
        data={this.props.data}
        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
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
    return (
      <Card onClick={this.onClick} className="graph-card" style={{height: '420px'}}>
        <Card.Body>
          <Card.Title className="card-title">{this.props.title}</Card.Title>
          {this.MySun(this.props.data)}
        </Card.Body>
      </Card>
    )
  }

  onClick = () => {
       this.props.history.push({
       pathname: this.props.fullscreen,
       state: {
            title: this.props.title,
            data: this.props.data,
            keys: this.props.graph,
       }
     })
  }
}

export default PieCard
