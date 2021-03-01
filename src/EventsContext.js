import React from 'react';

 const EventsContext = React.createContext({
    events: [],
    addEvent: () => {},
    editEvent: () => {},
    deleteEvent: () => {},
})

export default EventsContext;
