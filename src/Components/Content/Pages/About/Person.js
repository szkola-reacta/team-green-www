import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import ReactHtmlParser from 'react-html-parser';

function Person(props){
    const {name, linkedinLink, githubLink, description} = props.person;
    return(
        <Fragment>
            <div className="person">
            <p className="name">{name}</p>
            <p className="linkedin"><a href={linkedinLink}><FontAwesomeIcon icon={faLinkedinIn} /></a></p>
            <p className="github"><a href={githubLink}><FontAwesomeIcon icon={faGithubSquare} /></a></p>
            <p className="description">{ ReactHtmlParser(description)}</p>
            <FontAwesomeIcon icon="fa-coffee" />
            </div>
        </Fragment>
    );
}

export default Person;