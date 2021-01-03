import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import { ResponsiveRadar } from '@nivo/radar'

class RadarCard extends Component {

    MyRadar = ({ data }) => (
        <ResponsiveRadar
            data={this.props.data}
            keys={[ 'GO', 'Rust', 'Python' ]}
            indexBy="stat"
            maxValue="auto"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: 'color' }}
            gridLevels={5}
            gridShape="linear"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            enableDotLabel={false}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{ scheme: 'nivo' }}
            fillOpacity={0.25}
            blendMode="multiply"
            animate={true}
            motionConfig="wobbly"
            isInteractive={true}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )

  render() {
    return (
      <Card onClick={this.onClick} className="graph-card" style={{height: '420px'}}>
        <Card.Body>
          <Card.Title className="card-title">{this.props.title}</Card.Title>
          {this.MyRadar(this.props.data)}
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

export default RadarCard
