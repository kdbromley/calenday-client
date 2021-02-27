import { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul className='NavBar__list'>
                    <li><Link to='/month'>Month</Link></li>
                    <li><Link to='/week'>Week</Link></li>
                    <li><Link to='/day'>Day</Link></li>
                </ul>
            </nav>
        )
    }
}