import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import App from './app'

const ele = <div>
    <App />
</div>

ReactDOM.render(
    ele,
    document.getElementById('root')
)