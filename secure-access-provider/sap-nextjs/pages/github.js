import React from 'react';
import Link from 'next/link';
import axios from 'axios';

export default class extends React.Component {
    static async getInitialProps() {
        try {
            const res = await axios.get('https://api.github.com/users');
            return { data: res.data };
        }
        catch(e) {
            return { error: e };
        }
    }

    render() {
        if(this.props.error) {
            return(<div>Error: {this.props.error.message}</div>);
        }
        else {
            return(
                <div>
                    <h1>Github Users</h1>
                    <br/>
                    {
                        this.props.data.map((item, index) => (
                            <div key={index} className='userBlock'>
                                <img src={item.avatar_url} alt='User Icon' className='img'></img>
                                <div className='userDetails'>
                                    <p>Username: {item.login}</p>
                                    <p>ID: {item.id}</p>
                                </div>
                            </div>
                        ))
                    }
                    <br/>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </div>
            );
        }
    }
}