import {useStore} from "../App";

function Footer() {
  const rootStore = useStore()

  return (
    <div className="footer">
      <div>
        <p><b>Selected Date & Time</b></p>
        <p>0 professionals available</p>
      </div>
      <button
        className="bookButton"
        onClick={rootStore.requestBooking}
      >
        Book Now
      </button>
    </div>
  )
}

export default Footer