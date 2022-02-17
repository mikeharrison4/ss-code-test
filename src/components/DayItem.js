import {useStore} from "../App";
import {observer} from "mobx-react-lite";

const DayItem = observer(({ day }) => {
  const rootStore = useStore()

  return (
    <button
      className={`dayItem ${rootStore.selectedDay === day ? 'selected' : ''}`}
      onClick={() => rootStore.setSelectedDay(day)}
    >
      {day}
    </button>
  )
});

export default DayItem