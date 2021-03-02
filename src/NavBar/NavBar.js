import { Component } from 'react';
import { Link } from 'react-router-dom';
import EventsContext from '../EventsContext';
import { getDaysArray } from '../helper-func';
import './NavBar.css';

export default class NavBar extends Component {
    static contextType = EventsContext
    render() {
        const { today } = this.context;
        const dates = getDaysArray(new Date("2021-07-01"),new Date("2021-07-31"))
        return (
            <nav>
                <ul className='NavBar__list'>
                    <li><Link to='/month'>Calendar</Link></li>
                    <li><Link to='/schedule'>Today</Link></li>
                </ul>
                <label htmlFor='select-date'>
                  <select id='select-date'>
                  {dates.map(date =>
                      <option name='select-date-dropdown'>{date.toDateString()}</option>)}
                  </select>
                </label>
            </nav>
        )
    }
}