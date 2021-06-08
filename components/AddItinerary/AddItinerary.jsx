import React from "react";
import { useState, useEffect } from "react";

export default function AddItinerary() {
  const [dayCount, setDayCount] = useState(2);
  const [daysArray, setDaysArray] = useState([]);

  function addDay() {
    console.log("add");
    setDayCount(dayCount + 1);

    const newArray = [...daysArray];
    newArray.push(<Day key={dayCount} dayNumber={dayCount} />);

    setDaysArray(newArray);
  }

  return (
    <form action="/api/addItinerary" method="POST">
      <label htmlFor="name">
        Please enter a title for your trip
        <span aria-hidden="true">*</span>
      </label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="img">Please upload a photo of the location</label>
      <input id="img" name="img" type="text" required />

      <label htmlFor="country"></label>
      <select id="country" name="country" type="select" required>
        <option value="England">England</option>
        <option value="Wales">Wales</option>
        <option value="Scotland">Scotland</option>
        <option value="Northern Ireland">N. Ireland</option>
      </select>

      <label htmlFor="duration">
        Please enter the duration of your trip
        <span aria-hidden="true">*</span>
      </label>
      <input id="duration" name="duration" type="text" placeholde="e.g 5" required />

      <label htmlFor="budget">
        Please enter a rough budget for your trip
        <span aria-hidden="true">*</span>
      </label>
      <input id="budget" name="budget" type="text" placeholder="e.g 1400" required />

      <p>
        Did you need a car for this trip?
        <span aria-hidden="true">*</span>
      </p>
      <label htmlFor="carYes">Yes</label>
      <input id="carYes" name="car" type="radio" value="yes" />
      <label htmlFor="carNo">No</label>
      <input id="carNo" name="car" type="radio" value="no" />

      <div id="days">
        <p>Details</p>
        <Day dayNumber={1} />
        {daysArray}
        <input type="button" value="Add Day" onClick={addDay} />
      </div>

      <button type="submit"> Add my itinerary! </button>
    </form>
  );
}

function Day({ dayNumber }) {
  const day = `Day ${dayNumber}`;
  const description = `Description_${dayNumber}`;

  return (
    <div>
      <label htmlFor={day}>{day}</label>
      <input id={day} name={day} type="text" placeholder="location" required />
      <input
        id={description}
        name={description}
        type="text"
        placeholder="description"
        required
      />
    </div>
  );
}
