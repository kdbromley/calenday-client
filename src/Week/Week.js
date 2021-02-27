import EventCard from "../EventCard/EventCard";
import './Week.css'

export default function Week() {
    return (
        <div className='Week__container'>
            <h2>Week of July 8 2021</h2>
            <div className='Week__day-container'>
                <h3>Monday July 8</h3>
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <div className='Week__day-container'>
                <h3>Tuesday July 9</h3>
                <EventCard />
                <EventCard />
            </div>
            <div className='Week__day-container'>
                <h3>Wednesday July 10</h3>
                <p>No events</p>
            </div>
            <div className='Week__day-container'>
                <h3>Thursday July 11</h3>
                <p> no event's today</p>
            </div>
            <div className='Week__day-container'>
                <h3>Thursday July 12</h3>
                <EventCard />
            </div>
            <div className='Week__day-container'>
                <h3>Friday July 13</h3>
                <EventCard />
            </div>
            <div className='Week__day-container'>
                <h3>Saturday July 14</h3>
                <EventCard />
            </div>
            <div className='Week__day-container'>
                <h3>Sunday July 15</h3>
                <EventCard />
            </div>
        </div>
    )
}