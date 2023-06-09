import "./App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

const App = () => {
  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
