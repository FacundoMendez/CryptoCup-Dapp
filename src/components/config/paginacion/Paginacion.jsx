import React, { Suspense } from 'react'
import Spinner from '../spinner/Spinner';
import "./paginacion.css"

const Paginacion = ({number, setNumber , pageNumber }) => {

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  return (
    <div className="boxPaginacion">
        <div className="pagination">
            <button
              className="buttonLeft" onClick={() => {
                    if(number > 1){
                        setNumber(number - 1)
                    }
              }}>
            </button>

            <Suspense fallback={<Spinner/>}>
                {pageNumber.map((Elem , index) => {
                return (
                    <div key={index}>
                      <button
                          className="numbers"onClick={() => ChangePage(Elem)}>
                        {Elem}
                      </button>
                    </div>
                );
                })}
            </Suspense>

            <button
              className="buttonRight"onClick={() => {
                    console.log(pageNumber)
                    if(number < pageNumber[number]){
                        setNumber(number + 1)
                    }
                }}>
            </button>
        </div>
    </div>
  )
}

export default Paginacion