import React, {useState} from 'react'
import paisesJson from "../../../config/paises.json"

const SelectFlags = () => {

    const [paisFlag , setPaisFlag] = useState(0)


  return (
        <div className="flag">
            <div className="box_flag">
                <div className="circle_flag">
                    <img className='img_bandera' src={paisesJson[paisFlag].img} alt="flag" />
                </div>
                <div className="triangle_flag"></div>
            </div>
            <div className="container_select_flag">
                <label className="radio control-radio">
                    <p>Alemania</p>
                    <input className="select_value_flag" type="radio" value="option1" readOnly={true} name="radioBFlags" checked={paisFlag === 0} onClick={() =>   setPaisFlag(0)}   />
                </label>
                <label className="radio control-radio">
                    <p>Argentina</p>
                    <input className="select_value_flag" type="radio" value="option2" readOnly={true} name="radioBFlags" checked={paisFlag === 1} onClick={() =>   setPaisFlag(1)} />
                </label>
                <label className="radio control-radio">
                    <p>Arabia Saudita</p>
                    <input className="select_value_flag" type="radio" value="option3" readOnly={true} name="radioBFlags" checked={paisFlag === 2} onClick={() =>   setPaisFlag(2)} />
                </label>
                <label className="radio control-radio">
                    <p>Australia</p>
                    <input className="select_value_flag" type="radio" value="option4" readOnly={true} name="radioBFlags" checked={paisFlag === 3} onClick={() =>   setPaisFlag(3)}  />
                </label>
                <label className="radio control-radio">
                    <p>Brasil</p>
                    <input className="select_value_flag" type="radio" value="option5" readOnly={true} name="radioBFlags" checked={paisFlag === 4} onClick={() =>   setPaisFlag(4)}  />
                </label>
                <label className="radio control-radio">
                    <p>Bélgica</p>
                    <input className="select_value_flag" type="radio" value="option6" readOnly={true} name="radioBFlags" checked={paisFlag === 5} onClick={() =>   setPaisFlag(5)}  />
                </label>
                <label className="radio control-radio">
                    <p>Croacia</p>
                    <input  className="select_value_flag" type="radio" value="option7" readOnly={true} name="radioBFlags" checked={paisFlag === 6} onClick={() =>  setPaisFlag(6)}  />
                </label>
                <label className="radio control-radio">
                    <p>Corea del Sur</p>
                    <input  className="select_value_flag" type="radio" value="option8" readOnly={true} name="radioBFlags" checked={paisFlag === 7} onClick={() =>  setPaisFlag(7)}  />
                </label>
                <label className="radio control-radio">
                    <p>Canadá</p>
                    <input className="select_value_flag" type="radio" value="option9" readOnly={true} name="radioBFlags" checked={paisFlag === 8} onClick={() =>   setPaisFlag(8)}  />
                </label>
                <label className="radio control-radio">
                    <p>Camerún</p>
                    <input className="select_value_flag" type="radio" value="option10" readOnly={true} name="radioFlags " checked={paisFlag === 9} onClick={() => setPaisFlag(9)}  />
                </label>
                <label className="radio control-radio">
                    <p>Costa Rica</p>
                    <input className="select_value_flag" type="radio" value="option11" readOnly={true} name="radioFlags " checked={paisFlag === 10} onClick={() => setPaisFlag(10)}  />
                </label>
                <label className="radio control-radio">
                    <p>Dinamarca</p>
                    <input className="select_value_flag" type="radio" value="option12" readOnly={true} name="radioFlags " checked={paisFlag === 11} onClick={() => setPaisFlag(11)}  />
                </label>
                <label className="radio control-radio">
                    <p>España</p>
                    <input className="select_value_flag" type="radio" value="option13" readOnly={true} name="radioFlags " checked={paisFlag === 12} onClick={() => setPaisFlag(12)}  />
                </label>
                <label className="radio control-radio">
                    <p>Estados Unidos</p>
                    <input className="select_value_flag" type="radio" value="option14" readOnly={true} name="radioFlags " checked={paisFlag === 13} onClick={() => setPaisFlag(13)}  />
                </label>
                <label className="radio control-radio">
                    <p>Ecuador </p>
                    <input className="select_value_flag" type="radio" value="option15" readOnly={true} name="radioFlags " checked={paisFlag === 14} onClick={() => setPaisFlag(14)}  />
                </label>
                <label className="radio control-radio">
                    <p>Francia</p>
                    <input className="select_value_flag" type="radio" value="option16" readOnly={true} name="radioFlags " checked={paisFlag === 15} onClick={() => setPaisFlag(15)}  />
                </label>
                <label className="radio control-radio">
                    <p>Gales</p>
                    <input className="select_value_flag" type="radio" value="option17" readOnly={true} name="radioFlags " checked={paisFlag === 16} onClick={() => setPaisFlag(16)}  />
                </label>
                <label className="radio control-radio">
                    <p>Ghana</p>
                    <input className="select_value_flag" type="radio" value="option18" readOnly={true} name="radioFlags " checked={paisFlag === 17} onClick={() => setPaisFlag(17)}  />
                </label>
                <label className="radio control-radio">
                    <p>Holanda</p>
                    <input className="select_value_flag" type="radio" value="option19" readOnly={true} name="radioFlags " checked={paisFlag === 18} onClick={() => setPaisFlag(18)}  />
                </label>
                <label className="radio control-radio">
                    <p>Inglaterra</p>
                    <input className="select_value_flag" type="radio" value="option20" readOnly={true} name="radioFlags " checked={paisFlag === 19} onClick={() => setPaisFlag(19)}  />
                </label>
                <label className="radio control-radio">
                    <p>Irán</p>
                    <input className="select_value_flag" type="radio" value="option21" readOnly={true} name="radioFlags " checked={paisFlag === 20} onClick={() => setPaisFlag(20)}  />
                </label>
                <label className="radio control-radio">
                    <p>Japón</p>
                    <input className="select_value_flag" type="radio" value="option22" readOnly={true} name="radioFlags " checked={paisFlag === 21} onClick={() => setPaisFlag(21)}  />
                </label>
                <label className="radio control-radio">
                    <p>Marruecos</p>
                    <input className="select_value_flag" type="radio" value="option23" readOnly={true} name="radioFlags " checked={paisFlag === 22} onClick={() => setPaisFlag(22)}  />
                </label>
                <label className="radio control-radio">
                    <p>Mexico</p>
                    <input className="select_value_flag" type="radio" value="option24" readOnly={true} name="radioFlags " checked={paisFlag === 23} onClick={() => setPaisFlag(23)}  />
                </label>
                <label className="radio control-radio">
                    <p>Portugal</p>
                    <input className="select_value_flag" type="radio" value="option25" readOnly={true} name="radioFlags " checked={paisFlag === 24} onClick={() => setPaisFlag(24)}  />
                </label>
                <label className="radio control-radio">
                    <p>Polonia</p>
                    <input className="select_value_flag" type="radio" value="option26" readOnly={true} name="radioFlags " checked={paisFlag === 25} onClick={() => setPaisFlag(25)}  />
                </label>
                <label className="radio control-radio">
                    <p>Qatar</p>
                    <input className="select_value_flag" type="radio" value="option27" readOnly={true} name="radioFlags " checked={paisFlag === 26} onClick={() => setPaisFlag(26)}  />
                </label>
                <label className="radio control-radio">
                    <p>Serbia</p>
                    <input className="select_value_flag" type="radio" value="option28" readOnly={true} name="radioFlags " checked={paisFlag === 27} onClick={() => setPaisFlag(27)}  />
                </label>
                <label className="radio control-radio">
                    <p>Suiza</p>
                    <input className="select_value_flag" type="radio" value="option29" readOnly={true} name="radioFlags " checked={paisFlag === 28} onClick={() => setPaisFlag(28)}  />
                </label>
                <label className="radio control-radio">
                    <p>Senegal</p>
                    <input className="select_value_flag" type="radio" value="option30" readOnly={true} name="radioFlags " checked={paisFlag === 29} onClick={() => setPaisFlag(29)}  />
                </label>
                <label className="radio control-radio">
                    <p>Uruguay</p>
                    <input className="select_value_flag" type="radio" value="option31" readOnly={true} name="radioFlags " checked={paisFlag === 30} onClick={() => setPaisFlag(30)}  />
                </label>
                <label className="radio control-radio">
                    <p>Túnez</p>
                    <input className="select_value_flag" type="radio" value="option32" readOnly={true} name="radioFlags " checked={paisFlag === 31} onClick={() => setPaisFlag(31)}  />
                </label>
            </div>
        </div>
  )
}

export default SelectFlags