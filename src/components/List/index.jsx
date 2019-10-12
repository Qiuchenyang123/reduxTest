import React, { Component } from 'react'
import { List, Typography } from 'antd';

export class List extends Component {
    render() {
        return (
            <div>
                   <List
                        size="large"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.props.list}
                        renderItem={item => <List.Item>{item}</List.Item>}
                        />
            </div>
        )
    }
}

export default List
