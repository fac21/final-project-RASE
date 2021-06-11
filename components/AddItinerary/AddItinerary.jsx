import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  padding: 2rem;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 5%);
  > * {
    margin-top: 0.5rem;
  }

  .car {
    max-width: 30rem;
    display: flex;
    justify-content: space-between;
  }

  .yes > * {
    margin: 0.2rem;
  }

  .no > * {
    margin: 0.2rem;
  }

  button {
    margin-top: 2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background: #bfc8ad;
    padding: 0.5rem 2rem 0.5rem 2rem;
    width: fit-content;
    border: 1px solid #bfc8ad;
    font-family: Prata;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.32));
  }

  .days > * {
    margin-top: 0.5rem;
  }

  .addDay {
    padding: 0.2rem;
    font-family: Prata;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.32));
    float: right;
  }

  .dayItin > * {
    margin: 0.2rem;
  }

  input {
    line-height: 1.3rem;
  }

  select {
    line-height: 1.3rem;
  }
`;

export default function AddItinerary() {
  const [dayCount, setDayCount] = useState(1);
  const [daysArray, setDaysArray] = useState([]);

  function addDay() {
    const newArray = [...daysArray];
    newArray.push(<Day key={dayCount} dayNumber={dayCount} />);
    setDaysArray(newArray);
  }

  useEffect(() => {
    addDay();
    return;
  }, [dayCount]);

  return (
    <StyledForm action="/api/addItinerary" method="POST">
      <label htmlFor="name">
        Please enter a title for your trip
        <span aria-hidden="true">*</span>
      </label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="img">Please enter a photo URL of the location</label>
      <input id="img" name="img" type="text" required />

      <label htmlFor="country">Country</label>
      <select id="country" name="country" type="select" required>
        <option value="England">England</option>
        <option value="Wales">Wales</option>
        <option value="Scotland">Scotland</option>
        <option value="Northern Ireland">N. Ireland</option>
      </select>

      <label htmlFor="duration">
        Please enter the duration of your trip (days)
        <span aria-hidden="true">*</span>
      </label>
      <input
        id="duration"
        name="duration"
        type="number"
        placeholde="e.g 5"
        defaultValue={dayCount}
        required
      />

      <label htmlFor="budget">
        Please enter a rough budget for your trip (in £s)
        <span aria-hidden="true">*</span>
      </label>
      <input
        id="budget"
        name="budget"
        type="number"
        placeholder="e.g 1400"
        required
      />

      <div className="car">
        <p>
          Did you need a car for this trip?
          <span aria-hidden="true">*</span>
        </p>
        <div className="yes">
          <label htmlFor="carYes">Yes</label>
          <input
            id="carYes"
            name="need_car"
            type="radio"
            value="Yes"
            required
          />
        </div>
        <div className="no">
          <label htmlFor="carNo">No</label>
          <input id="carNo" name="need_car" type="radio" value="No" />
        </div>
      </div>

      <div className="days" id="days">
        <p>Details</p>
        {daysArray}
        <input
          type="button"
          className="addDay"
          value="Add Day"
          onClick={() => setDayCount(dayCount + 1)}
        />
      </div>

      <button type="submit"> Add my itinerary! </button>
    </StyledForm>
  );
}

function Day({ dayNumber }) {
  const day = `Day ${dayNumber}`;
  const description = `Description_${dayNumber}`;

  return (
    <div className="dayItin">
      <label htmlFor={day}>{day}</label>
      <p>Insert postcode of the place and description of the day</p>
      <input id={day} name={day} type="text" placeholder="postcode" required />
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
