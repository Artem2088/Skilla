import "./Eval.scss";

const Eval = () => {
   return (
      <>
         <div className='eval-excellent'>
            <div className='eval-excellent__container'>
               <span className='eval-excellent__point-green'></span>
               <span className='eval-excellent__point-green'></span>
               <span className='eval-excellent__point-green'></span>
            </div>
            <div className='eval-excellent__box'>
               <span className='eval-excellent__span'>Отлично</span>
            </div>
         </div>
         <div className='eval-excellent eval-well'>
            <div className='eval-excellent__container'>
               <span className='eval-excellent__point-green eval-well__point-gray'></span>
               <span className='eval-excellent__point-green eval-well__point-gray'></span>
            </div>
            <div className='eval-excellent__box eval-well__box'>
               <span className='eval-excellent__span eval-well__span'>Хорошо</span>
            </div>
         </div>
         <div className='eval-excellent eval-bad'>
            <div className='eval-excellent__container'>
               <span className='eval-excellent__point-green eval-bad__point-red'></span>
            </div>
            <div className='eval-excellent__box eval-bad__box'>
               <span className='eval-excellent__span eval-bad__span'>Плохо</span>
            </div>
         </div>
         <div className='eval-recognize'>
               <span className='eval-excellent__span eval-recognize__span'>Распознать</span>
            </div>
      </>

   )
}

export default Eval;