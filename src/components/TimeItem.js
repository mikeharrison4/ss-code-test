import {useStore} from "../App";
import {observer} from "mobx-react-lite";
import moment from "moment";
import formatTime from "../utils/formatTime";

const disableTimeButton = (time) => {
  const currentTime = moment(new Date(), 'HH:mm:ss a');
  const calendarTime = moment(time, 'HH:mm:ss a');
  const diff = Math.floor(
    (moment.duration(calendarTime.diff(currentTime)).asMinutes())
  )
  if(diff < 0 || diff < 120) return true; // if times are before current time OR within 120mins (2hours) then disable
  return false;
}

const TimeItem = observer(({ time }) => {
  const rootStore = useStore();
  const formattedTime = formatTime(time);

  return (
    <button
      className={`timeItem ${rootStore.selectedTime === formattedTime ? 'selected' : ''} ${disableTimeButton(formattedTime) ? 'disabled' : ''}`}
      onClick={() => rootStore.setSelectedTime(formattedTime)}
      disabled={disableTimeButton(formattedTime)}
    >
      {formattedTime}
    </button>
  )
})

export default TimeItem