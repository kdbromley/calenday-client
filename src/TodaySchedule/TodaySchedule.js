import { Link } from 'react-router-dom';
import './TodaySchedule.css'

export default function TodaySchedule() {
    return (
        <div className='TodaySchedule__container'>
            <h2 className='TodaySchedule__title'>Today's Schedule</h2>

            <section className='TodaySchedule__events'>
                <ol className='TodaySchedule__events-list'>
                    <li><h3> 7:00 am:<Link to='/event-page'> Event one</Link></h3></li>
                    <li><h3>10:30 am: <Link to='./event-page'>Event two</Link></h3></li>
                    <li><h3>7:30 pm: <Link to='/event-page'>Event three</Link></h3></li>
                </ol>
            </section>
        </div>
    )
}