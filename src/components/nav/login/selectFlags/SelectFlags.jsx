import React, {useContext, useState} from 'react'
import ContextConnected from '../../../config/context/ConnectedContext'
import paisesJson from "../../../config/paises2.json"

const SelectFlags = () => {
    const Connected = useContext(ContextConnected)


  return (
        <div className="flag">
            <div className="box_flag">
                <div className="circle_flag">
                    <img className='img_bandera' src={paisesJson[Connected.paisFlag].img} alt="flag" />
                </div>
                <div className="triangle_flag"></div>
            </div>
            <div className="container_select_flag">
                <label className="radio control-radio">
                    <p>Alemania</p>
                    <input className="select_value_flag" type="radio" value="option1" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "Alemania"} onClick={() =>   Connected.setPaisFlag("Alemania")}   />
                </label>
                <label className="radio control-radio">
                    <p>Argentina</p>
                    <input className="select_value_flag" type="radio" value="option2" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "Argentina"} onClick={() =>   Connected.setPaisFlag("Argentina")} />
                </label>
                <label className="radio control-radio">
                    <p>Arabia Saudita</p>
                    <input className="select_value_flag" type="radio" value="option3" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "Arabia Saudita"} onClick={() =>   Connected.setPaisFlag("Arabia Saudita")} />
                </label>
                <label className="radio control-radio">
                    <p>Australia</p>
                    <input className="select_value_flag" type="radio" value="option4" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "Australia"} onClick={() =>   Connected.setPaisFlag("Australia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Brasil</p>
                    <input className="select_value_flag" type="radio" value="option5" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "Brasil"} onClick={() =>   Connected.setPaisFlag("Brasil")}  />
                </label>
                <label className="radio control-radio">
                    <p>Bélgica</p>
                    <input className="select_value_flag" type="radio" value="option6" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "Belgica"} onClick={() =>   Connected.setPaisFlag("Belgica")}  />
                </label>
                <label className="radio control-radio">
                    <p>Croacia</p>
                    <input  className="select_value_flag" type="radio" value="option7" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "Croacia"} onClick={() =>  Connected.setPaisFlag("Croacia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Corea del Sur</p>
                    <input  className="select_value_flag" type="radio" value="option8" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "Corea del Sur"} onClick={() =>  Connected.setPaisFlag("Corea del Sur")}  />
                </label>
                <label className="radio control-radio">
                    <p>Canadá</p>
                    <input className="select_value_flag" type="radio" value="option9" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "Canada"} onClick={() =>   Connected.setPaisFlag("Canadá")}  />
                </label>
                <label className="radio control-radio">
                    <p>Camerún</p>
                    <input className="select_value_flag" type="radio" value="option10" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Camerun"} onClick={() => Connected.setPaisFlag("Camerun")}  />
                </label>
                <label className="radio control-radio">
                    <p>Costa Rica</p>
                    <input className="select_value_flag" type="radio" value="option11" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Costa Rica"} onClick={() => Connected.setPaisFlag("Costa Rica")}  />
                </label>
                <label className="radio control-radio">
                    <p>Dinamarca</p>
                    <input className="select_value_flag" type="radio" value="option12" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Dinamarca"} onClick={() => Connected.setPaisFlag("Dinamarca")}  />
                </label>
                <label className="radio control-radio">
                    <p>España</p>
                    <input className="select_value_flag" type="radio" value="option13" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "España"} onClick={() => Connected.setPaisFlag("España")}  />
                </label>
                <label className="radio control-radio">
                    <p>Estados Unidos</p>
                    <input className="select_value_flag" type="radio" value="option14" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Estados Unidos"} onClick={() => Connected.setPaisFlag("Estados Unidos")}  />
                </label>
                <label className="radio control-radio">
                    <p>Ecuador </p>
                    <input className="select_value_flag" type="radio" value="option15" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Ecuador"} onClick={() => Connected.setPaisFlag("Ecuador")}  />
                </label>
                <label className="radio control-radio">
                    <p>Francia</p>
                    <input className="select_value_flag" type="radio" value="option16" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Francia"} onClick={() => Connected.setPaisFlag("Francia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Gales</p>
                    <input className="select_value_flag" type="radio" value="option17" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Gales"} onClick={() => Connected.setPaisFlag("Gales")}  />
                </label>
                <label className="radio control-radio">
                    <p>Ghana</p>
                    <input className="select_value_flag" type="radio" value="option18" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Ghana"} onClick={() => Connected.setPaisFlag("Ghana")}  />
                </label>
                <label className="radio control-radio">
                    <p>Holanda</p>
                    <input className="select_value_flag" type="radio" value="option19" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Holanda"} onClick={() => Connected.setPaisFlag("Holanda")}  />
                </label>
                <label className="radio control-radio">
                    <p>Inglaterra</p>
                    <input className="select_value_flag" type="radio" value="option20" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Inglaterra"} onClick={() => Connected.setPaisFlag("Inglaterra")}  />
                </label>
                <label className="radio control-radio">
                    <p>Irán</p>
                    <input className="select_value_flag" type="radio" value="option21" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Iran"} onClick={() => Connected.setPaisFlag("Iran")}  />
                </label>
                <label className="radio control-radio">
                    <p>Japón</p>
                    <input className="select_value_flag" type="radio" value="option22" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Japon"} onClick={() => Connected.setPaisFlag("Japon")}  />
                </label>
                <label className="radio control-radio">
                    <p>Marruecos</p>
                    <input className="select_value_flag" type="radio" value="option23" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Marruecos"} onClick={() => Connected.setPaisFlag("Marruecos")}  />
                </label>
                <label className="radio control-radio">
                    <p>Mexico</p>
                    <input className="select_value_flag" type="radio" value="option24" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Mexico"} onClick={() => Connected.setPaisFlag("Mexico")}  />
                </label>
                <label className="radio control-radio">
                    <p>Portugal</p>
                    <input className="select_value_flag" type="radio" value="option25" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Portugal"} onClick={() => Connected.setPaisFlag("Portugal")}  />
                </label>
                <label className="radio control-radio">
                    <p>Polonia</p>
                    <input className="select_value_flag" type="radio" value="option26" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Polonia"} onClick={() => Connected.setPaisFlag("Polonia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Qatar</p>
                    <input className="select_value_flag" type="radio" value="option27" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Qatar"} onClick={() => Connected.setPaisFlag("Qatar")}  />
                </label>
                <label className="radio control-radio">
                    <p>Serbia</p>
                    <input className="select_value_flag" type="radio" value="option28" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Serbia"} onClick={() => Connected.setPaisFlag("Serbia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Suiza</p>
                    <input className="select_value_flag" type="radio" value="option29" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Suiza"} onClick={() => Connected.setPaisFlag("Suiza")}  />
                </label>
                <label className="radio control-radio">
                    <p>Senegal</p>
                    <input className="select_value_flag" type="radio" value="option30" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Senegal"} onClick={() => Connected.setPaisFlag("Senegal")}  />
                </label>
                <label className="radio control-radio">
                    <p>Uruguay</p>
                    <input className="select_value_flag" type="radio" value="option31" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Uruguay"} onClick={() => Connected.setPaisFlag("Uruguay")}  />
                </label>
                <label className="radio control-radio">
                    <p>Túnez</p>
                    <input className="select_value_flag" type="radio" value="option32" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "Tunez"} onClick={() => Connected.setPaisFlag("Tunez")}  />
                </label>
            </div>
        </div>
  )
}

export default SelectFlags