import React, { Component } from 'react'
import { Input, Button } from 'antd';

const { TextArea } = Input;

export class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    onChange(value) {
        this.setState({
            value
        })
    }
    render() {
        return (
            <div>
                <TextArea onChange={this.onChange} rows={4} />
                <Button onClick={this.props.submit.bind(this.state.value)}>submit</Button>
            </div>
        )
    }
}

export default Editor
