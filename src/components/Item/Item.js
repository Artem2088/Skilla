import { useEffect, useState } from "react";
import "./Item.scss";
import callIn from "../../images/icons/call-in.svg";
import callOut from "../../images/icons/call-out.svg";
import callSkip from "../../images/icons/call-skip.svg";
import avatarMember from "../../images/icons/avatar-member.svg";
import RecordItem from "../RecordItem/RecordItem";

const Item = ({ element, getRecord, record }) => {
  const [calltype, setCallType] = useState(1);
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(element.date?.slice(11, 16));
    if (element.in_out == 1) {
      setCallType(callIn);
    }
    if (element.in_out == 0) {
      setCallType(callOut);
    }
    if (element.status == "Не дозвонился") {
      setCallType(callSkip);
    }

    toHHMMSS(element.time);
  }, [element]);

  const toHHMMSS = (secs) => {
    let sec_num = parseInt(secs, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor(sec_num / 60) % 60;
    let seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

  return (
    <section className='item'>
      <div className='item__container'>
        <img src={calltype} alt='тип' className='item__type' />
        <span className='item__span-time'>{time}</span>
        <img
          src={element.person_avatar ? element.person_avatar : avatarMember}
          alt='сотрудник'
          className='item__member'
        />
        <span className='item__call'>{element.from_number}</span>
        <span className='item__source'>
          {element.source ? element.source : "Нет данных"}
        </span>
        <span className='item__eval'>{element.errors}</span>
        {element.record ? (
          <RecordItem
            getRecord={getRecord}
            element={element}
            record={record}
            toHHMMSS={toHHMMSS}
          />
        ) : (
          <span className='item__duration'>{toHHMMSS(element.time)}</span>
        )}
      </div>
    </section>
  );
};

export default Item;
