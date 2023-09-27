import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import {
  fetchLists,
  fetchSortLists,
  createSortOfType,
} from "../../store/listsSlice";
import { createIntervalFilter } from "../../store/dateSlice";

const App = () => {
  const dispatch = useDispatch();
  const endDate = useSelector((state) => state.date.endDate);
  const startDate = useSelector((state) => state.date.startDate);
  const newDate = useSelector((state) => state.date.newDate);
  const each = useSelector((state) => state.lists.each);
  const sort = useSelector((state) => state.lists.sort);
  // const [record, setRecord] = useState();

  localStorage.setItem("startDay", startDate);
  localStorage.setItem("endDay", endDate);

  useEffect(() => {
    dispatch(fetchLists({ newDate, startDate, endDate }));
  }, [newDate]);

  useEffect(() => {
    if (!each) {
      return;
    }
    dispatch(fetchSortLists({ startDate, endDate, newDate, sort }));
  }, [sort]);

  useEffect(() => {
    dispatch(createIntervalFilter({ each }));
    dispatch(createSortOfType({ each }));
  }, [each, sort, startDate, newDate]);

  // const getRecord = async (each) => {
  //   await getRecordUser(each.record, each.partnership_id)
  //     .then((blob) => {
  //       const objectURL = URL.createObjectURL(blob);
  //       each.src = objectURL;
  //       setRecord(each.src);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Sidebar />
        <Main
        // getRecord={getRecord}
        // record={record}
        />
      </div>
    </div>
  );
};

export default App;
