import React from 'react';
import Link from 'next/link';

function About() {
    return(
        <div>
            <div style={{backgroundColor: 'yellowgreen'}}>
                This is an application built using next.js to demonstrate
                the effectiveness of server-side rendering!
            </div>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    );
}

export default About;