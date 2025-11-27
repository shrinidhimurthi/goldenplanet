import React, { useState } from 'react';
import './ScheduleCall.css';

const ScheduleCall = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const durations = ['30 mins', '1 hr', '1 hr 30 mins'];
  const mentors = [
    'John Smith',
    'Sarah Johnson',
    'Michael Brown',
    'Emily Davis',
    'Robert Wilson',
    'Jessica Martinez',
  ];

  // Initialize state for each day
  const [scheduleData, setScheduleData] = useState(
    days.reduce((acc, day, index) => ({
      ...acc,
      [day]: {
        date: '',
        mentor: mentors[index % mentors.length],
        duration: durations[0],
      },
    }), {})
  );

  // Handle date change
  const handleDateChange = (day, value) => {
    setScheduleData((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        date: value,
      },
    }));
  };

  // Handle mentor change
  const handleMentorChange = (day, value) => {
    setScheduleData((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        mentor: value,
      },
    }));
  };

  // Handle duration change
  const handleDurationChange = (day, value) => {
    setScheduleData((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        duration: value,
      },
    }));
  };

  // Handle schedule booking
  const handleBook = (day) => {
    const data = scheduleData[day];
    if (!data.date) {
      alert(`Please select a date for ${day}`);
      return;
    }
    alert(
      `Scheduled for ${day} - Date: ${data.date}, Mentor: ${data.mentor}, Duration: ${data.duration}`
    );
  };

  return (
    <div className="schedule-call">
      <div className="schedule-header">
        <h1>Schedule a Call</h1>
        <p>Choose your preferred day, date, mentor, and duration</p>
      </div>

      <div className="schedule-container">
        <div className="table-responsive">
          <table className="schedule-table">
            <thead>
              <tr>
                {days.map((day, index) => (
                  <th key={index} className="day-header">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Date Row */}
              <tr>
                {days.map((day, index) => (
                  <td key={index} className="date-cell">
                    <input
                      type="date"
                      value={scheduleData[day].date}
                      onChange={(e) => handleDateChange(day, e.target.value)}
                      className="date-input"
                    />
                  </td>
                ))}
              </tr>

              {/* Mentor Name Row */}
              <tr>
                {days.map((day, index) => (
                  <td key={index} className="mentor-cell">
                    <select
                      value={scheduleData[day].mentor}
                      onChange={(e) => handleMentorChange(day, e.target.value)}
                      className="mentor-select"
                    >
                      {mentors.map((mentor, idx) => (
                        <option key={idx} value={mentor}>
                          {mentor}
                        </option>
                      ))}
                    </select>
                  </td>
                ))}
              </tr>

              {/* Duration Row */}
              <tr>
                {days.map((day, index) => (
                  <td key={index} className="duration-cell">
                    <select
                      value={scheduleData[day].duration}
                      onChange={(e) => handleDurationChange(day, e.target.value)}
                      className="duration-select"
                    >
                      {durations.map((duration, idx) => (
                        <option key={idx} value={duration}>
                          {duration}
                        </option>
                      ))}
                    </select>
                  </td>
                ))}
              </tr>

              {/* Action Button Row */}
              <tr>
                {days.map((day, index) => (
                  <td key={index} className="action-cell">
                    <button
                      className="book-btn"
                      onClick={() => handleBook(day)}
                    >
                      Book
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Section */}
      <div className="schedule-info">
        <h3>How to Schedule Your Call</h3>
        <ol>
          <li>Select a date for your preferred day</li>
          <li>Choose a mentor from the dropdown</li>
          <li>Select the duration of your call</li>
          <li>Click the "Book" button to confirm your schedule</li>
        </ol>
      </div>
    </div>
  );
};

export default ScheduleCall;
