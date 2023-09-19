import { useEffect, useState } from "react";
import "./CustomModal.scss";

const CustomModal = ({ title, array, handleChange }) => {
  const [position, setPosition] = useState({});
  const [active, setIsActive] = useState(false);

  let styles = {
    cal: {
      position: "absolute",
      top: "40%",
      right: "7%",
    },
    type: {
      position: "absolute",
      top: "84%",
      right: "50%",
    },
  };

  useEffect(() => {
    if (title) {
      setIsActive(true);
      switch (title) {
        case "3 дня":
          setPosition(styles.cal);
          break;
        case "Все типы":
          setPosition(styles.type);
          break;
        default:
          return;
      }
    }
    return;
  }, [title]);

  const handleChangeModal = (e) => {
    handleChange(e);
    setIsActive(false);
  };

  return (
    <section className={active ? "modal_active" : "modal"} style={position}>
      <div className='modal__container'>
        <h3 className='modal__title'>{title}</h3>
        <ul className='modal__lists'>
          {array &&
            array.map((item, index) => (
              <li className='modal__item' key={index}>
                <button
                  className='modal__button'
                  type='button'
                  onClick={handleChangeModal}
                  data-each={item}
                >
                  {item}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default CustomModal;
