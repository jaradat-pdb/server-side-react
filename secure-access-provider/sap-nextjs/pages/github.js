import React from 'react';
import Link from 'next/link';
import axios from 'axios';

const baseUrl = 'https://api.github.com/users';

export default class extends React.Component {
    static async getInitialProps() {
        try {
            const res = await axios.get(baseUrl);
            return { data: res.data };
        }
        catch(e) {
            return { error: e };
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            error: props.error
        };
    }

    getUser = async() => {
        try {
            let userId = document.getElementById('inputTextBox').value;
            const res = await axios.get(`${baseUrl}/${userId}`);
            console.log(`Received resp for request of user: ${userId}\n${JSON.stringify(res)}`);
            this.setState({
                data: [res.data],
                error: null
            });
        }
        catch(e) {
            this.setState({
                data: null,
                error: e
            });
        }
    }

    render() {
        if(this.state.error) {
            return(
                <div>
                    <h1>Github Users</h1>
                    <br/>
                    <div className='center'>
                        <input id='inputTextBox' type='text'></input>
                        <button type='button' onClick={this.getUser}>
                            Get User
                        </button>
                    </div>
                    <br/>
                    <p className='error'>
                        Error: {this.state.error.message}
                    </p>
                </div>
            );
        }
        else {
            return(
                <div>
                    <h1>Github Users</h1>
                    <br/>
                    <div className='center'>
                        <input id='inputTextBox' type='text'></input>
                        <button type='button' onClick={this.getUser}>
                            Get User
                        </button>
                    </div>
                    <br/>
                    {
                        this.state.data.map((item, index) => (
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