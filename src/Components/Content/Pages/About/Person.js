import React from './node_modules/react';

import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedinIn} from './node_modules/@fortawesome/free-brands-svg-icons'
import ReactHtmlParser from './node_modules/react-html-parser';

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