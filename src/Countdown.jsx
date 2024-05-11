// import React from 'react'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';



const Countdown = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [day , setDay]= useState(0);
  const [hr , setHr]= useState(0);
  const [min , setmin]= useState(0);
  const [sec , setSec]= useState(0);

  return (
    <div className='datepick'>
      <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm aa"
    />
    <button>Start Timer</button>

    <div className='display'>
    <div>
      <button className='dis'>
        <div className='dis1'>{day}</div>
        <span className='dis2'>Days</span>
      </button>
    </div>
    <div>
      <button className='dis'>
        <div className='dis1'>{hr}</div>
        <span className='dis2'>Hours</span>
      </button>
    </div>
    <div>
      <button className='dis'>
        <div className='dis1'>{min}</div>
        <span className='dis2'>Minutes</span>
      </button>
    </div>
    <div>
      <button className='dis'>
        <div className='dis1'>{sec}</div>
        <span className='dis2'>Seconds</span>
      </button>
    </div>
    </div>

    </div>

  )
}

export default Countdown