import Paper from 'material-ui/Paper';
import React from 'react';

const WorkDetailsComponent = () => {

    const style = {
        height: 600,
        width: 600,
        textAlign: 'center',
        display: 'block',
        borderRadius: 50,
        margin: '0 auto'
      };

    return (
        <div className="work-details-container"><Paper style={style} zDepth={5} rounded={false}>
        You a dork !!
        </Paper>
        </div>
    )
};

export default WorkDetailsComponent;