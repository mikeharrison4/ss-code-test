import React, { useEffect, useState } from "react";
import {useStore} from "../App";
import {observer} from "mobx-react-lite";
import mockApi from "../mockApi";
import moment from "moment";
import {DATE_FORMAT} from "../constants/daysConstants";

const Footer = observer(() => {
  const { selectedTime, selectedDay, requestBooking, setNumOfPros, numOfPros } = useStore();

  // useEffect(() => {
  //   if(selectedDay) {
  //     const fetchNumberOfPros = async () => {
  //       setNumOfPros({...numOfPros, isLoading: true});
  //       let res = await mockApi.getNumberOfPros(moment(selectedDay, DATE_FORMAT).format('D'));
  //       setNumOfPros({
  //         isLoading: false,
  //         value: res,
  //       });
  //     }
  //     fetchNumberOfPros();
  //   }
  // }, [selectedDay]);


  return (
    <div className="footer">
      <div>
        <p>
          {
            selectedDay && selectedTime
              ? <b>{`${selectedTime} on ${selectedDay}`}</b>
              : <b>Please select a time</b>
          }
        </p>
        { numOfPros.isLoading ? '...' : <p>{`${numOfPros.value} professionals available`}</p> }
      </div>
      <button
        className={`bookButton ${!selectedTime || numOfPros.value === 0 ? 'disabled' : ''}`}
        onClick={requestBooking}
        disabled={!selectedTime}
      >
        Book Now
      </button>
    </div>
  )
})

export default Footer