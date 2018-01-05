    import React from 'react';
    import { skills } from './index.config';
    import ActionInfo from 'material-ui/svg-icons/action/info';
    import { List, ListItem } from 'material-ui/List';

    const goToLink = (url) => {
        window.open(url);
    }

    const SkillsListComponent = () => {

        const items = (() => {
            return skills.map(item => {
                return <ListItem
                    onClick={() => {goToLink(item.url)}}
                    key={item.name}
                    primaryText={item.name}
                    leftAvatar={<a href={item.url} target="_blank"><ActionInfo /></a>}
                    rightIcon={null}
                />
            });
        })();

        return (
            <div className="skills-header-container">
                <h2> Relevent Skills </h2>
                <div className="skills-list-component-container">
                    <div className="list-in-thirds">
                        <List>
                            {items.slice(0, 7)}
                        </List>
                    </div>
                    <div className="list-in-thirds">
                        <List>
                            {items.slice(7, 14)}
                        </List>
                    </div>
                    <div className="list-in-thirds hide-border">
                        <List>
                            {items.slice(14, items.length - 1)}
                        </List>
                    </div>
                </div>
            </div>
        );
    };

    export default SkillsListComponent;
