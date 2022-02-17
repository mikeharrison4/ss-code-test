import {useStore} from "../App";

function DayItem(props) {
  const rootStore = useStore()

  return (
    <button
      className="dayItem"
      onClick={rootStore.selectDay}
    >
      {props.day}
    </button>
  )
}

export default DayItem