import React from 'react';
import HardwarePhoneIphone from 'material-ui/svg-icons/hardware/phone-iphone';
import ContactMeBadgeItem from './contactMeBadgeItem';
import { badgeItemInfo } from './index.config';

const ContactMeComponent = (props) => {

    const badgeItems = (() => {
        return badgeItemInfo.map(item => {
            return <span key={item.iconKey}><ContactMeBadgeItem iconKey={item.iconKey} type={item.type} action={item.action} url={item.url} /><ContactMeBadgeItem /></span>
        });
    })();

    const iconStyle = {
        height: '100px',
        width: '100px'
    };

    return (
        <div className="contact-me-container">

            <div className="contact-icon-header"> <HardwarePhoneIphone style={iconStyle} /> </div>

            <div className="contact-me-header-container">
                Contact Me
            </div>

            <div className="contact-me-subheader-container">
                Check out my profile or send me a message
            </div>

            <div className="contact-method-container">

                {badgeItems}

            </div>

        </div>
    );
}

export default ContactMeComponent;