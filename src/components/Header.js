import React from 'react';
import './Header.css';

const Header = () => {
    return ( <
        header className = "header" >
        <
        h1 > Denil John < /h1> <
        p > Frontend Developer | Permanent Visa Holder in Australia < /p> <
        p > Email: < a href = "mailto:denilj6@gmail.com" > denilj6 @gmail.com < /a> | Phone: 0400868220</p >
        <
        p > < a href = "https://www.linkedin.com/in/deniljohn-90a2bb134/"
        target = "_blank"
        rel = "noopener noreferrer" > LinkedIn < /a></p >
        <
        /header>
    );
};

export default Header;