import { Component } from 'react';
import { Link } from 'react-router-dom';
import EventsContext from '../EventsContext';
import EventCard from "../EventCard/EventCard";
import './Day.css'

export default class Day extends Component {
    static contextType = EventsContext;
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        const { events } = this.context || {};
        const { selectedDate } = this.context || '';
        console.log(selectedDate)
        const { today } = this.context || '';
        const thisDaysEvents = (selectedDate ) ? events.filter(event => selectedDate === event.eventDate) : events.filter(event => today === event.eventDate);
            
        return (
            <div className='Day__container'>
                <h2>{today}</h2>
                <div className='Day__events-list'>
                    {thisDaysEvents.map(event =>
                    <Link to={`/events/${event.id}`} key={event.id}><EventCard event={event} /></Link>)}
                </div>

                <Link to='/week'>See my week &rarr;</Link>
            </div>
        )
    }
}