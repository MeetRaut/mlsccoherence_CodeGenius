// Calendar.jsx

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import './Calendar.css'; // Import CSS for styling

function CustomPopup({ onClose, onSave }) {
  const [eventName, setEventName] = useState("");

  const handleChange = (event) => {
    setEventName(event.target.value);
  };

  const handleSave = () => {
    onSave(eventName);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Enter Event Name</h2>
        <input type="text" value={eventName} onChange={handleChange} />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

function Calendar() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupDate, setPopupDate] = useState(null);
  const [events, setEvents] = useState([]);

  const handleDateClick = (arg) => {
    setPopupDate(arg.date);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSaveEvent = (eventName) => {
    if (eventName) {
      const newEvent = {
        title: eventName,
        start: popupDate,
        allDay: true,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        dateClick={handleDateClick}
        eventClick={() => setSelectedDate(null)}
        selectable={true}
        selectMirror={true}
        events={events}
      />
      {showPopup && (
        <CustomPopup
          onClose={handleClosePopup}
          onSave={handleSaveEvent}
        />
      )}
    </div>
  );
}

export default Calendar;