import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const ContentSwitcher = (props) => {


    const content = (() => {
        const leftStyle = {
            float: 'left'
        };

        const rightStyle = {
            float: 'right'
        }
        return props.showContent ? <div className="content-switcher-container">
            <IconButton style={leftStyle} onClick={props.prev.bind(this)}><HardwareKeyboardArrowLeft style={leftStyle} />
            </IconButton>
            <IconButton style={rightStyle} onClick={props.next.bind(this)}>
                <HardwareKeyboardArrowRight style={rightStyle} /
                ></IconButton>
        </div> : null;
    })();

    return (
        content
    )
}

export default ContentSwitcher;