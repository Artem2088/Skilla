import { useState, useEffect } from "react";
import "./App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import { getList, getRecordUser } from "../../utils/Api";

const App = () => {
  let currentInit = new Date();
  let months = currentInit.getMonth();
  let date = currentInit.getDate();
  let year = currentInit.getFullYear();

  const [calls, setCalls] = useState(JSON.parse(localStorage.getItem("lists")));
  const [loading, setLoading] = useState(false);
  const [startDate] = useState(
    localStorage.getItem("startDay") || year + "-" + months + "-" + (date - 3)
  );
  const [endDate] = useState(
    localStorage.getItem("endDay") || year + "-" + months + "-" + date
  );
  const [title, setTitle] = useState("");
  const [each, setEach] = useState("");
  const [newDate, setNewDate] = useState("");
  const [sortType, setSortType] = useState(" ");
  const [current, setIsCurrent] = useState(false);
  const [record, setRecord] = useState();

  useEffect(() => {
    getFullData();
    localStorage.setItem("startDay", startDate);
    localStorage.setItem("endDay", endDate);
  }, []);

  useEffect(() => {
    if (!each) {
      return;
    }
    createNewLists();
  }, [sortType, newDate, each]);

  useEffect(() => {
    if (!each) {
      return;
    }
    getRecord();
  }, [each.record]);

  useEffect(() => {
    createIntervalFilter();
    createSortOfType();
  }, [each, sortType, startDate]);

  const handleChange = (e) => {
    let target = e.currentTarget.dataset;
    let value = e.currentTarget.value;

    if (target.id == "calendar") {
      setTitle(value);
    }
    if (target.title) {
      setTitle(target.title);
    }
    if (target.each) {
      setEach(target.each);
    }
  };

  const createIntervalFilter = () => {
    if (each) {
      switch (each) {
        case "Неделя":
          setNewDate(year + "-" + months + "-" + (date - 7));
          setIsCurrent(true);
          break;
        case "Месяц":
          setNewDate(year + "-" + (months - 1) + "-" + (date - 3));
          setIsCurrent(true);
          break;
        case "Год":
          setNewDate(year - 1 + "-" + months + "-" + (date - 3));
          setIsCurrent(true);
          break;
      }
    }
  };

  const createSortOfType = () => {
    if (each) {
      switch (each) {
        case "Входящие":
          setSortType(1);
          break;
        case "Исходящие":
          setSortType(0);
          break;
        case "Все звонки":
          setSortType(null);
          break;
      }
    }
    return;
  };

  const getFullData = async () => {
    await getList(startDate, endDate)
      .then((res) => {
        let data = res.results;
        let localData = JSON.stringify(data);
        localStorage.setItem("lists", localData);
        setCalls(data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createNewLists = async () => {
    await getList(current ? newDate : startDate, endDate, sortType)
      .then((res) => {
        let newData = res.results;
        setCalls(newData);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecord = async (each) => {
    await getRecordUser(each.record, each.partnership_id)
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        each.src = objectURL;
        setRecord(each.src);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeFilter = async () => {
    await setSortType(null);
  };

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Sidebar />
        <Main
          calls={calls}
          loading={loading}
          handleChange={handleChange}
          title={title}
          each={each}
          getRecord={getRecord}
          record={record}
          removeFilter={removeFilter}
        />
      </div>
    </div>
  );
};

export default App;
