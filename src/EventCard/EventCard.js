import { Component } from 'react';
import './EventCard.css'

export default class EventCard extends Component {
    static defaultProps = {
        event: {}
    }
    render() {
        const { event } = this.props || {}
        return (
            <div className='EventCard__container'>
                <h5 className='EventCard__text'><span className='time'>{event.startTime}</span> {event.eventTitle}</h5>
            </div>
        )
    }
}