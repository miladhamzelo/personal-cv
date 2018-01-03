import React from 'react';
import { badgeClassMappings } from './index.config';


const ContactMeBadgeItem = (props) => {
    const iconClassName = badgeClassMappings[props.iconKey];

    return (
        <div className="contact-me-badge-item-container">
            <span className={iconClassName}></span>
            <span className="contact-type-container">{props.type}</span>
            <span className="contact-info-container"><a target="_blank" href={props.url}>{props.action}</a></span>
        </div>
    )
}

export default ContactMeBadgeItem;