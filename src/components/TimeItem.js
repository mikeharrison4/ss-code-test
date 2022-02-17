import {useStore} from "../App";
import {observer} from "mobx-react-lite";

const TimeItem = observer(({ time }) => {
  const rootStore = useStore()

  return (
    <button
      className={`timeItem ${rootStore.selectedTime === time ? 'selected' : ''}`}
      onClick={() => rootStore.setSelectedTime(time)}
    >
      {time}
    </button>
  )
})

export default TimeItem