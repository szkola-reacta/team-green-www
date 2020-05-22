import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import ReactHtmlParser from 'react-html-parser';

function Person(props){
    const {name, linkedinLink, githubLink, description} = props.person;
    return(
        <div className="person">
            <p className="name">{name}</p>
            <div className="social">
                <p className="linkedin"><a href={linkedinLink}><FontAwesomeIcon icon={faLinkedinIn} /></a></p>
                <p className="github"><a href={githubLink}><FontAwesomeIcon icon={faGithubSquare} /></a></p>
            </div>
            <p className="description">{ ReactHtmlParser(description)}</p>
        </div>
    );
}

export default Person;