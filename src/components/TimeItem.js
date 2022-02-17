import {useStore} from "../App";

function TimeItem(props) {
  const rootStore = useStore()

  return (
    <button
      className="timeItem"
      onClick={rootStore.selectTime}
    >
      {props.time}
    </button>
  )
}

export default TimeItem