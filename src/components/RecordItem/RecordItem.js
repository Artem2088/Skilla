import { useEffect, useState } from "react";
import "./RecordItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetRecord } from "../../store/listsSlice";

const RecordItem = ({ element, toHHMMSS }) => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.lists.record);
  const [playing, setPlaying] = useState(false);
  const [rec, setRec] = useState("");
  const audio = new Audio(rec);

  useEffect(() => {
    if (!record) {
      return;
    }
    for (let key of record) {
      const objectURL = URL.createObjectURL(key);
      element.src = objectURL;
      console.log(key);
      setRec(element.src);
    }
  }, [dispatch]);

  // useEffect(() => {
  //   audio.load();
  //   toHHMMSS(element.time);
  // }, [record]);

  // useEffect(() => {
  //   audio.addEventListener("play", () => setPlaying(false));
  //   return () => {
  //     audio.removeEventListener("play", () => setPlaying(false));
  //   };
  // }, []);

  // useEffect(() => {
  //   playing ? audio.play() : audio.pause();
  // }, [playing]);

  // const toggle = () => setPlaying(!playing);

  const stopSound = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const handleClick = async (element) => {
    dispatch(fetchGetRecord(element));

    // toggle();
  };

  return (
    <div className='record'>
      <span className='record__span-time'>{toHHMMSS(element.time)}</span>
      <button
        className='record__btn-play'
        onClick={() => handleClick(element)}
      />
      <span className='record__progress'></span>
      <button className='record__btn-span' />
      {playing ? (
        <button className='record__btn-close' onClick={stopSound} />
      ) : (
        ""
      )}
    </div>
  );
};

export default RecordItem;
