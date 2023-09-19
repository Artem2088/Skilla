import { useEffect, useState } from "react";
import "./Item.scss";
import callIn from "../../images/icons/call-in.svg";
import callOut from "../../images/icons/call-out.svg";
import callSkip from "../../images/icons/call-skip.svg";
import avatarMember from "../../images/icons/avatar-member.svg";
import RecordItem from "../RecordItem/RecordItem";

const Item = ({ each, getRecord, record }) => {
  const [calltype, setCallType] = useState(1);
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(each.date?.slice(11, 16));
    if (each.in_out == 1) {
      setCallType(callIn);
    }
    if (each.in_out == 0) {
      setCallType(callOut);
    }
    if (each.status == "Не дозвонился") {
      setCallType(callSkip);
    }

    toHHMMSS(each.time);
  }, [each]);

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
          src={each.person_avatar ? each.person_avatar : avatarMember}
          alt='сотрудник'
          className='item__member'
        />
        <span className='item__call'>{each.from_number}</span>
        <span className='item__source'>
          {each.source ? each.source : "Нет данных"}
        </span>
        <span className='item__eval'>{each.errors}</span>
        {each.record ? (
          <RecordItem
            getRecord={getRecord}
            each={each}
            record={record}
            toHHMMSS={toHHMMSS}
          />
        ) : (
          <span className='item__duration'>{toHHMMSS(each.time)}</span>
        )}
      </div>
    </section>
  );
};

export default Item;
