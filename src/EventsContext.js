import React from 'react';

 const EventsContext = React.createContext({
    today: '',
    selectedDate: '',
    events: [],
    addEvent: () => {},
    editEvent: () => {},
    deleteEvent: () => {},
})

export default EventsContext;
