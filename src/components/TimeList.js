import { useStore } from '../App'
import TimeItem from './TimeItem'
import {observer} from "mobx-react-lite";

const TimeList = observer(() => {
  const rootStore = useStore()

  return <div className="timeList">
    {rootStore.filterTimesByPeriod.map(t => <TimeItem time={t} key={t} />)}
  </div>
});

export default TimeList