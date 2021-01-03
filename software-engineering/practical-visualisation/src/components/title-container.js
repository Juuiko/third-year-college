import React from 'react'


class TitleContainer extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return(
                <div className="row h-75">
                    <div className="col-sm-12 text-center my-auto">
                     <h1><b>{this.props.title}</b></h1>
                     <h4>{this.props.subtitle}</h4>
                    </div>
                </div>
        )
    }
}

export default TitleContainer
