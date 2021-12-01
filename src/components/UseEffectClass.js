import React, { Component } from 'react'

export default class UseEffectClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name:''
        }
    }
    componentDidMount() {
        document.title = `Your count is ${this.state.count}`
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count!==this.state.count){
            console.log("component updates");
            document.title = `Your count is ${this.state.count}`
        }

    }
    
    
    updateCounter = () => {
        this.setState(
            prevCount => {
                return { count: prevCount.count + 1 }
            }
        )
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                <button onClick={this.updateCounter}>Count is {this.state.count}</button>
            </div>
        )
    }
}
