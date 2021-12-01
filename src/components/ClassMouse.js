import React, { Component } from 'react'

export default class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }
    logMousePositon=(e)=>{
        console.log('mouse move');
        this.setState({x:e.clientX,y:e.clientY})

    }
    componentDidMount() {
        console.log('componentDidMount move');

        window.addEventListener('mousemove',this.logMousePositon)
    }
    
    render() {

        return (
            <div>
                x- {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}
