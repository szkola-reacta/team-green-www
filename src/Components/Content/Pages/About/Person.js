import React, { Fragment } from 'react';

function Person(props){
    const {name, linkedin, github, description} = props.person;
    return(
        <Fragment>
            <div className="person">
            <p className="name">{name}</p>
            <p className="linkedin">{linkedin}</p>
            <p className="github">{github}</p>
            <p className="description">{description}</p>
            </div>
        </Fragment>
    );
}

export default Person;