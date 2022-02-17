import {useStore} from "../App";

function PeriodItem(props) {
  const rootStore = useStore()

  return (
    <button
      className="periodItem"
      onClick={rootStore.selectPeriod}
    >
      {props.period}
    </button>
  )
}

export default PeriodItem