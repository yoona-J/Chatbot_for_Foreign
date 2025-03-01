import React from 'react'

import { Avatar, List, Icon } from 'antd';

function Message(props) {

    const avartarSrc = props.who === 'bot' ? <Icon type="robot" /> : <Icon type='smile' />

    return (
        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta avatar={<Avatar icon={avartarSrc} />} title={ props.who } description={ props.text} />
        </List.Item>
    )
}

export default Message