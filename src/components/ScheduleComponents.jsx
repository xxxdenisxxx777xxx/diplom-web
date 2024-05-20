import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ScheduleComponents() {
    const [events, setEvents] = useState([]);

    const addEvent = (date, event) => {
        const newEvent = { date, event };
        setEvents([...events, newEvent]);
    };

    const deleteEvent = (index) => {
        const newEvents = [...events];
        newEvents.splice(index, 1);
        setEvents(newEvents);
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Календарь событий</h1>
            <div className="mb-4">
                <label htmlFor="eventDate">Дата:</label>
                <input type="date" id="eventDate" onChange={(e) => setSelectedDate(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="eventDescription">Описание события:</label>
                <input type="text" id="eventDescription" onChange={(e) => setEventDescription(e.target.value)} />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => addEvent(selectedDate, eventDescription)}>Добавить событие</button>
            <ul>
                {events.map((event, index) => (
                    <li key={index} className="border rounded p-2 my-2">
                        <span>{event.date}</span>
                        <span>{event.event}</span>
                        <button className="ml-2 bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteEvent(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<ScheduleComponents />, document.getElementById('root'));

export default ScheduleComponents;
