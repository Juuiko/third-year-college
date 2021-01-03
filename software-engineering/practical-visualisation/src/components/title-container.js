import React from 'react'


class TitleContainer extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return(
                <div className="col-md-12 text-center">
                     <h1><b>{this.props.title}</b></h1>
                     <h4>{this.props.subtitle}</h4  >
                  </div>
        )
    }
}

export default TitleContainer
