import React from 'react'

const categoryItem = (props) => {

    const style = {
        width: '48px',
        height: '48px'
    };

    const _getContent = () =>{
        return props.index > 2 ? <div className="category-item-wrapper gap-top"><p> {props.title}</p> <props.icon style={style}/></div> :
        <div className="category-item-wrapper"><div className="filler"></div><props.icon style={style} /><p>{props.title}</p></div>
    }

    return (
        <div onClick={props.actions.setCategory.bind(this, props.displayKey)}>
            {_getContent()}
        </div>
    );

};


export default categoryItem;