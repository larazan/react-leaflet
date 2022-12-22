import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import events from '../assets/data/events';

const localizer = momentLocalizer(moment)
// const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const CalendarEvent = () => {
  return (
    <>
    <main className='p-2'>
      <div className='p-3 bg-white'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        // step={60}
        // views={allViews}
        // defaultDate={new Date(2022, 12, 1)}
        // popup={false}
        // onShowMore={(events, date) => this.setState({ showModal: true, events })}
      />
      </div>
      </main>
    </>
  )
}

export default CalendarEvent