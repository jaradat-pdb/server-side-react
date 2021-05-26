import React from 'react';

const data = [
    {
        name: 'Azure',
        company: 'Microsoft',
        website: 'https://azure.microsoft.com/'
    },
    {
        name: 'AWS',
        company: 'Amazon',
        website: 'https://aws.amazon.com/'
    },
    {
        name: 'GCloud',
        company: 'Google',
        website: 'https://cloud.google.com/'
    }
];

function DataComponent(props) {
    return(
        <div>
            <h1>Cloud Providers</h1>
            <br/>
            {
                data.map(
                    (item, index) => (
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <p>Provided by {item.company}</p>
                            <a href={item.website}>Website</a>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default DataComponent;