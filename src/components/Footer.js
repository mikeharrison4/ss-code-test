import {useStore} from "../App";
import {observer} from "mobx-react-lite";

const Footer = observer(() => {
  const { selectedTime, selectedDay, requestBooking } = useStore()

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
        <p>0 professionals available</p>
      </div>
      <button
        className="bookButton"
        onClick={requestBooking}
      >
        Book Now
      </button>
    </div>
  )
})

export default Footer