import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <>
              <h5><Link to='/month'>Month</Link></h5>
              <h5><Link to='/week'>Week</Link></h5>
              <h5><Link to='/day'>Day</Link></h5>
            </>
        )
    }
}