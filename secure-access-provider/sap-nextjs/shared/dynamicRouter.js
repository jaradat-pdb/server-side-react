import React from 'react';
import Link from 'next/link';

function GetLink(props) {
    let title = (props.title)
        ? (props.title.charAt(0).toUpperCase() + props.title.slice(1)).replace('-', ' ')
        : (props.page.charAt(0).toUpperCase() + props.page.slice(1)).replace('-', ' ');
    let img = (props.class) ? props.class : '';
    return(
        <div>
            <div className={ img }></div>
            <Link href={ `/${props.page}?title=${title}&img=${img}` } as={ props.disp }>
                <a>{ title }</a>
            </Link>
        </div>
    );
}

export default GetLink;