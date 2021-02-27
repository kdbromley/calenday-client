import { Component } from "react";
import EventCard from "../EventCard/EventCard";

export default class EventPage extends Component {
    render() {
        return(
            <div>
                <EventCard />
                <p>Description</p>
            </div>
        )
    }
}