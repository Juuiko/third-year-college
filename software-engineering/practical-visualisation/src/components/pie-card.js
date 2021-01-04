import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import { ResponsivePie } from '@nivo/pie'

class PieCard extends Component {

    MyPie = ({ data }) => (
        <ResponsivePie
            data={this.props.data}
            margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={1}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: 'color' }}
            enableSliceLabels={false}
        />
    )

  render() {
    return (
      <Card className="graph-card" style={{height: '420px'}}>
        <Card.Body>
          <Card.Title className="card-title">{this.props.title}</Card.Title>
          {this.MyPie(this.props.data)}
        </Card.Body>
      </Card>
    )
  }
}

export default PieCard
