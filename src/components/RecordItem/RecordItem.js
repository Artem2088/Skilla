import { useEffect, useState } from "react";
import "./RecordItem.scss";

const RecordItem = ({ getRecord, each, record, toHHMMSS }) => {
  const [playing, setPlaying] = useState(false);
  const audio = new Audio(record);

  useEffect(() => {
    audio.load();
    toHHMMSS(each.time);
  }, []);

  useEffect(() => {
    audio.addEventListener("play", () => setPlaying(false));
    return () => {
      audio.removeEventListener("play", () => setPlaying(false));
    };
  }, []);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  const toggle = () => setPlaying(!playing);

  const stopSound = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const handleClick = async (item) => {
    await getRecord(item);
    toggle();
  };

  return (
    <div className='record'>
      <span className='record__span-time'>{toHHMMSS(each.time)}</span>
      <button className='record__btn-play' onClick={() => handleClick(each)} />
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
