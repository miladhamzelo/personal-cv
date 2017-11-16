import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { PictureMappings } from './index.config';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const TechListComponent = (props) => {

    const getAvatar = (key) => {
       return PictureMappings[key];
    };

    const items = (() => {
        return props.items.map(item => {
            return <ListItem
                key={item.title}
                primaryText={item.title}
                leftAvatar={getAvatar(item.avatarKey)}
                rightIcon={null}
            />
        });
    })();

    return (
            <List>
                <Subheader>Relevent Skills</Subheader>
                {items}
            </List>
    )
}

export default TechListComponent;