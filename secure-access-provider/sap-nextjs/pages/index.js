import React from 'react';
import GetLink from '../shared/dynamicRouter';

function MyComponent() {
    return(
        <div>
            <GetLink disp='dynamo' page='page' title='page-1' class='img p1'></GetLink>
            <GetLink disp='mongo' page='page' title='page-2' class='img p2'></GetLink>
            <GetLink disp='neo' page='page' title='page-3' class='img p3'></GetLink>
            <GetLink disp='githubUsers' page='github'></GetLink>
            <GetLink disp='aboute' page='about'></GetLink>
            <GetLink disp='landing' page='landing'></GetLink>
        </div>
    );
}

export default MyComponent;