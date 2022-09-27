import React, {useState} from 'react'
import paisesJson from "../../../config/paises2.json"

const SelectFlags = () => {

    const [paisFlag , setPaisFlag] = useState("Alemania")


  return (
        <div className="flag">
            <div className="box_flag">
                <div className="circle_flag">
                    <img className='img_bandera' src={paisesJson.paisFlag.img} alt="flag" />
                </div>
                <div className="triangle_flag"></div>
            </div>
            <div className="container_select_flag">
                <label className="radio control-radio">
                    <p>Alemania</p>
                    <input className="select_value_flag" type="radio" value="option1" readOnly={true} name="radioBFlags" checked={paisFlag === "Alemania"} onClick={() =>   setPaisFlag("Alemania")}   />
                </label>
                <label className="radio control-radio">
                    <p>Argentina</p>
                    <input className="select_value_flag" type="radio" value="option2" readOnly={true} name="radioBFlags" checked={paisFlag === "Argentina"} onClick={() =>   setPaisFlag("Argentina")} />
                </label>
                <label className="radio control-radio">
                    <p>Arabia Saudita</p>
                    <input className="select_value_flag" type="radio" value="option3" readOnly={true} name="radioBFlags" checked={paisFlag === "Arabia Saudita"} onClick={() =>   setPaisFlag("Arabia Saudita")} />
                </label>
                <label className="radio control-radio">
                    <p>Australia</p>
                    <input className="select_value_flag" type="radio" value="option4" readOnly={true} name="radioBFlags" checked={paisFlag === "Australia"} onClick={() =>   setPaisFlag("Australia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Brasil</p>
                    <input className="select_value_flag" type="radio" value="option5" readOnly={true} name="radioBFlags" checked={paisFlag === "Brasil"} onClick={() =>   setPaisFlag("Brasil")}  />
                </label>
                <label className="radio control-radio">
                    <p>Bélgica</p>
                    <input className="select_value_flag" type="radio" value="option6" readOnly={true} name="radioBFlags" checked={paisFlag === "Belgica"} onClick={() =>   setPaisFlag("Belgica")}  />
                </label>
                <label className="radio control-radio">
                    <p>Croacia</p>
                    <input  className="select_value_flag" type="radio" value="option7" readOnly={true} name="radioBFlags" checked={paisFlag === "Croacia"} onClick={() =>  setPaisFlag("Croacia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Corea del Sur</p>
                    <input  className="select_value_flag" type="radio" value="option8" readOnly={true} name="radioBFlags" checked={paisFlag === "Corea del Sur"} onClick={() =>  setPaisFlag("Corea del Sur")}  />
                </label>
                <label className="radio control-radio">
                    <p>Canadá</p>
                    <input className="select_value_flag" type="radio" value="option9" readOnly={true} name="radioBFlags" checked={paisFlag === "Canada"} onClick={() =>   setPaisFlag("Canadá")}  />
                </label>
                <label className="radio control-radio">
                    <p>Camerún</p>
                    <input className="select_value_flag" type="radio" value="option10" readOnly={true} name="radioFlags " checked={paisFlag === "Camerun"} onClick={() => setPaisFlag("Camerun")}  />
                </label>
                <label className="radio control-radio">
                    <p>Costa Rica</p>
                    <input className="select_value_flag" type="radio" value="option11" readOnly={true} name="radioFlags " checked={paisFlag === "Costa Rica"} onClick={() => setPaisFlag("Costa Rica")}  />
                </label>
                <label className="radio control-radio">
                    <p>Dinamarca</p>
                    <input className="select_value_flag" type="radio" value="option12" readOnly={true} name="radioFlags " checked={paisFlag === "Dinamarca"} onClick={() => setPaisFlag("Dinamarca")}  />
                </label>
                <label className="radio control-radio">
                    <p>España</p>
                    <input className="select_value_flag" type="radio" value="option13" readOnly={true} name="radioFlags " checked={paisFlag === "España"} onClick={() => setPaisFlag("España")}  />
                </label>
                <label className="radio control-radio">
                    <p>Estados Unidos</p>
                    <input className="select_value_flag" type="radio" value="option14" readOnly={true} name="radioFlags " checked={paisFlag === "Estados Unidos"} onClick={() => setPaisFlag("Estados Unidos")}  />
                </label>
                <label className="radio control-radio">
                    <p>Ecuador </p>
                    <input className="select_value_flag" type="radio" value="option15" readOnly={true} name="radioFlags " checked={paisFlag === "Ecuador"} onClick={() => setPaisFlag("Ecuador")}  />
                </label>
                <label className="radio control-radio">
                    <p>Francia</p>
                    <input className="select_value_flag" type="radio" value="option16" readOnly={true} name="radioFlags " checked={paisFlag === "Francia"} onClick={() => setPaisFlag("Francia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Gales</p>
                    <input className="select_value_flag" type="radio" value="option17" readOnly={true} name="radioFlags " checked={paisFlag === "Gales"} onClick={() => setPaisFlag("Gales")}  />
                </label>
                <label className="radio control-radio">
                    <p>Ghana</p>
                    <input className="select_value_flag" type="radio" value="option18" readOnly={true} name="radioFlags " checked={paisFlag === "Ghana"} onClick={() => setPaisFlag("Ghana")}  />
                </label>
                <label className="radio control-radio">
                    <p>Holanda</p>
                    <input className="select_value_flag" type="radio" value="option19" readOnly={true} name="radioFlags " checked={paisFlag === "Holanda"} onClick={() => setPaisFlag("Holanda")}  />
                </label>
                <label className="radio control-radio">
                    <p>Inglaterra</p>
                    <input className="select_value_flag" type="radio" value="option20" readOnly={true} name="radioFlags " checked={paisFlag === "Inglaterra"} onClick={() => setPaisFlag("Inglaterra")}  />
                </label>
                <label className="radio control-radio">
                    <p>Irán</p>
                    <input className="select_value_flag" type="radio" value="option21" readOnly={true} name="radioFlags " checked={paisFlag === "Iran"} onClick={() => setPaisFlag("Iran")}  />
                </label>
                <label className="radio control-radio">
                    <p>Japón</p>
                    <input className="select_value_flag" type="radio" value="option22" readOnly={true} name="radioFlags " checked={paisFlag === "Japon"} onClick={() => setPaisFlag("Japon")}  />
                </label>
                <label className="radio control-radio">
                    <p>Marruecos</p>
                    <input className="select_value_flag" type="radio" value="option23" readOnly={true} name="radioFlags " checked={paisFlag === "Marruecos"} onClick={() => setPaisFlag("Marruecos")}  />
                </label>
                <label className="radio control-radio">
                    <p>Mexico</p>
                    <input className="select_value_flag" type="radio" value="option24" readOnly={true} name="radioFlags " checked={paisFlag === "Mexico"} onClick={() => setPaisFlag("Mexico")}  />
                </label>
                <label className="radio control-radio">
                    <p>Portugal</p>
                    <input className="select_value_flag" type="radio" value="option25" readOnly={true} name="radioFlags " checked={paisFlag === "Portugal"} onClick={() => setPaisFlag("Portugal")}  />
                </label>
                <label className="radio control-radio">
                    <p>Polonia</p>
                    <input className="select_value_flag" type="radio" value="option26" readOnly={true} name="radioFlags " checked={paisFlag === "Polonia"} onClick={() => setPaisFlag("Polonia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Qatar</p>
                    <input className="select_value_flag" type="radio" value="option27" readOnly={true} name="radioFlags " checked={paisFlag === "Qatar"} onClick={() => setPaisFlag("Qatar")}  />
                </label>
                <label className="radio control-radio">
                    <p>Serbia</p>
                    <input className="select_value_flag" type="radio" value="option28" readOnly={true} name="radioFlags " checked={paisFlag === "Serbia"} onClick={() => setPaisFlag("Serbia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Suiza</p>
                    <input className="select_value_flag" type="radio" value="option29" readOnly={true} name="radioFlags " checked={paisFlag === "Suiza"} onClick={() => setPaisFlag("Suiza")}  />
                </label>
                <label className="radio control-radio">
                    <p>Senegal</p>
                    <input className="select_value_flag" type="radio" value="option30" readOnly={true} name="radioFlags " checked={paisFlag === "Senegal"} onClick={() => setPaisFlag("Senegal")}  />
                </label>
                <label className="radio control-radio">
                    <p>Uruguay</p>
                    <input className="select_value_flag" type="radio" value="option31" readOnly={true} name="radioFlags " checked={paisFlag === "Uruguay"} onClick={() => setPaisFlag("Uruguay")}  />
                </label>
                <label className="radio control-radio">
                    <p>Túnez</p>
                    <input className="select_value_flag" type="radio" value="option32" readOnly={true} name="radioFlags " checked={paisFlag === "Tunez"} onClick={() => setPaisFlag("Tunez")}  />
                </label>
            </div>
        </div>
  )
}

export default SelectFlags