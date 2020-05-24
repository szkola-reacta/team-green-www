import React from 'react';
import Person from './Person';

const person = [
    {
        name: "Marta Motyczyńska",
        linkedinLink: "https://www.linkedin.com/in/marta-motyczynska-b51b28167",
        githubLink: "https://github.com/marta-motyczynska",
        description: "Programistka Full-stack z zapleczem w Javie. Aspirująca Front-end / React developerka"
    },
    {
        name: "Monika Szymańska Mącik",
        linkedinLink: "https://pl.linkedin.com/in/monika-szymańska-mącik-66b451159",
        githubLink: "https://github.com/Monika1403",
        description: "Nazywam się Monika. Uwielbiam się uczyć i poznawać nowe języki. Do tej pory były to języki romańskie, a od niedawna również frontendowe języki programowania. W przyszłości mam plan zostać Full-Stack Developerem. Początki są ciężkie, jednakże nie zniechęcam się "
    },
    {
        name: "Krzysztof Siwkowski",
        linkedinLink: "https://www.linkedin.com/in/krzysztof-siwkowski-411403146/",
        githubLink: "https://github.com/Krzysiek011",
        description: "Ui/ux designer. Pierwsze kroki stawiał w grafice webowej, przy czym gdzieś obok zawsze było zamiłowanie do funkcjonalności stron www. Zwolennik przejrzystych i minimalistycznych interfejsów."},
    {
        name: "Łukasz",
        linkedinLink: "https://www.linkedin.com/in/%C5%82ukasz-krakowiak-45a40983/",
        githubLink: "https://github.com/lukaszkrakowiak",
        description: "Jestem człowiekiem lubiącym wymyślać i tworzyć nowe rzeczy. Cieszy mnie jak mogę się rozwijać i mogę pomagać ludziom w rozwoju. Podczas tworzenia, lubię widzieć efekty, dlatego wolę Front-end niż Back-end"}
];

function About(){
    return(
        <div id="persons">
            {person.map((p, index) =>
                <Person key={`person-${index}`} person={p} />
            )}
        </div>
    );
}

export default About;