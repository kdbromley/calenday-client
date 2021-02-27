import { Link } from 'react-router-dom';
import EventCard from "../EventCard/EventCard";
import './Day.css'

export default function Day() {
    return (
        <div className='Day__container'>
            <h2>Monday July 12</h2>
            <div className='Day__events-list'>
                <Link to='#'><EventCard /></Link>
            </div>

            <Link to='#'>See my week &rarr;</Link>
        </div>
    )
}