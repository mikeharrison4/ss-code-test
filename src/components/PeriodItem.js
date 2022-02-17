import {useStore} from "../App";
import {observer} from "mobx-react-lite";

const PeriodItem = observer(({ period }) => {
  const rootStore = useStore();

  return (
    <button
      className={`periodItem ${rootStore.selectedPeriod === period ? 'selected' : ''}`}
      onClick={() => rootStore.setSelectedPeriod(period)}
    >
      {period}
    </button>
  )
});

export default PeriodItem