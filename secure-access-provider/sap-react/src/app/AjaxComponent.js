import React from 'react';
import axios from 'axios';

class AjaxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        axios.get('https://api.github.com/users')
        .then(response => {
            this.setState({ data: response.data });
            this.setState({ isLoaded: true });
        })
        .catch(error => {
            this.setState({ error: error });
        });
    }

    render() {
        if(this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        }
        else if(!this.state.isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return(
                <div>
                    <h1>Github Users</h1>
                    <br/>
                    {
                        this.state.data.map((item, index) => (
                            <div key={index} className='userBlock'>
                                <img src={item.avatar_url} alt='User Icon'></img>
                                <div className='userDetails'>
                                    <p>Username: {item.login}</p>
                                    <p>Id: {item.id}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            );
        }
    }
}

export default AjaxComponent;