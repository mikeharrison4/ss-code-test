import {useStore} from "../App";
import {observer} from "mobx-react-lite";

const Footer = observer(() => {
  const { selectedTime, selectedDay, requestBooking } = useStore()

  console.log(selectedTime);

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
        className={`bookButton ${!selectedTime ? 'disabled' : ''}`}
        onClick={requestBooking}
        disabled={!selectedTime}
      >
        Book Now
      </button>
    </div>
  )
})

export default Footer