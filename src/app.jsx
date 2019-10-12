import React, { Component } from 'react'
import Editor from './components/Editor/index'
import List from './components/List/index'

export class App extends Component {
    render() {
        return (
            <div>
                <Editor />
                <List />
            </div>
        )
    }
}

export default App
