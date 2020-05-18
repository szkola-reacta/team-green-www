import React, { Fragment } from 'react';
import Person from './Person';

const person = [
    {
        name: "Marta",
        linkedin: "",
        github: "",
        description: ""
    },
    {
        name: "Monika",
        linkedin: "",
        github: "",
        description: ""
    },
    {
        name: "Krzysiek",
        linkedin: "",
        github: "",
        description: ""},
    {
        name: "Łukasz",
        linkedin: "",
        github: "",
        description: ""}
];

function About(){
    return(
        <Fragment>
            {person.map((p) =>
                <Person person={p} />
            )}
        </Fragment>
    );
}

export default About;