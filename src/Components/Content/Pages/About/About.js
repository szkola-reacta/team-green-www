import React, { Fragment } from 'react';
import Person from './Person';

const person = [
    {
        name: "Marta",
        linkedinLink: "",
        githubLink: "",
        description: ""
    },
    {
        name: "Monika",
        linkedinLink: "",
        githubLink: "",
        description: ""
    },
    {
        name: "Krzysiek",
        linkedinLink: "",
        githubLink: "",
        description: ""},
    {
        name: "Łukasz",
        linkedinLink: "https://www.linkedin.com/in/%C5%82ukasz-krakowiak-45a40983/",
        githubLink: "https://github.com/lukaszkrakowiak",
        description: "Jestem osobą lubiącą tworzyć i wymyślać rzeczy. <br /> aaaa"}
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