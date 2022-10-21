import React, {useContext} from 'react'
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
                    <p>Germany</p>
                    <input className="select_value_flag" type="radio" value="option1" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "germany"} onClick={() =>   Connected.setPaisFlag("germany")}   />
                </label>
                <label className="radio control-radio">
                    <p>Argentina</p>
                    <input className="select_value_flag" type="radio" value="option2" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "argentina"} onClick={() =>   Connected.setPaisFlag("argentina")} />
                </label>
                <label className="radio control-radio">
                    <p>Saudi Arabia</p>
                    <input className="select_value_flag" type="radio" value="option3" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "saudi arabia"} onClick={() =>   Connected.setPaisFlag("saudi arabia")} />
                </label>
                <label className="radio control-radio">
                    <p>Australia</p>
                    <input className="select_value_flag" type="radio" value="option4" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "australia"} onClick={() =>   Connected.setPaisFlag("australia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Brazil</p>
                    <input className="select_value_flag" type="radio" value="option5" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "brazil"} onClick={() =>   Connected.setPaisFlag("brazil")}  />
                </label>
                <label className="radio control-radio">
                    <p>Belgium</p>
                    <input className="select_value_flag" type="radio" value="option6" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "belgium"} onClick={() =>   Connected.setPaisFlag("belgium")}  />
                </label>
                <label className="radio control-radio">
                    <p>Croatia</p>
                    <input  className="select_value_flag" type="radio" value="option7" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "croatia"} onClick={() =>  Connected.setPaisFlag("croatia")}  />
                </label>
                <label className="radio control-radio">
                    <p>South Korea</p>
                    <input  className="select_value_flag" type="radio" value="option8" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "south korea"} onClick={() =>  Connected.setPaisFlag("south korea")}  />
                </label>
                <label className="radio control-radio">
                    <p>Canada</p>
                    <input className="select_value_flag" type="radio" value="option9" readOnly={true} name="radioBFlags" checked={Connected.paisFlag === "canada"} onClick={() =>   Connected.setPaisFlag("canada")}  />
                </label>
                <label className="radio control-radio">
                    <p>cameroon</p>
                    <input className="select_value_flag" type="radio" value="option10" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "cameroon"} onClick={() => Connected.setPaisFlag("cameroon")}  />
                </label>
                <label className="radio control-radio">
                    <p>Costa Rica</p>
                    <input className="select_value_flag" type="radio" value="option11" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "costa rica"} onClick={() => Connected.setPaisFlag("costa rica")}  />
                </label>
                <label className="radio control-radio">
                    <p>denmark</p>
                    <input className="select_value_flag" type="radio" value="option12" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "denmark"} onClick={() => Connected.setPaisFlag("denmark")}  />
                </label>
                <label className="radio control-radio">
                    <p>spain</p>
                    <input className="select_value_flag" type="radio" value="option13" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "spain"} onClick={() => Connected.setPaisFlag("spain")}  />
                </label>
                <label className="radio control-radio">
                    <p>united states</p>
                    <input className="select_value_flag" type="radio" value="option14" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "united states"} onClick={() => Connected.setPaisFlag("united states")}  />
                </label>
                <label className="radio control-radio">
                    <p>Ecuador </p>
                    <input className="select_value_flag" type="radio" value="option15" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "ecuador"} onClick={() => Connected.setPaisFlag("ecuador")}  />
                </label>
                <label className="radio control-radio">
                    <p>France</p>
                    <input className="select_value_flag" type="radio" value="option16" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "france"} onClick={() => Connected.setPaisFlag("france")}  />
                </label>
                <label className="radio control-radio">
                    <p>Wales</p>
                    <input className="select_value_flag" type="radio" value="option17" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "wales"} onClick={() => Connected.setPaisFlag("wales")}  />
                </label>
                <label className="radio control-radio">
                    <p>Ghana</p>
                    <input className="select_value_flag" type="radio" value="option18" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "ghana"} onClick={() => Connected.setPaisFlag("ghana")}  />
                </label>
                <label className="radio control-radio">
                    <p>Netherlands</p>
                    <input className="select_value_flag" type="radio" value="option19" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "netherlands"} onClick={() => Connected.setPaisFlag("netherlands")}  />
                </label>
                <label className="radio control-radio">
                    <p>England</p>
                    <input className="select_value_flag" type="radio" value="option20" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "england"} onClick={() => Connected.setPaisFlag("england")}  />
                </label>
                <label className="radio control-radio">
                    <p>Iran</p>
                    <input className="select_value_flag" type="radio" value="option21" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "iran"} onClick={() => Connected.setPaisFlag("iran")}  />
                </label>
                <label className="radio control-radio">
                    <p>Japan</p>
                    <input className="select_value_flag" type="radio" value="option22" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "japan"} onClick={() => Connected.setPaisFlag("japan")}  />
                </label>
                <label className="radio control-radio">
                    <p>Morocco</p>
                    <input className="select_value_flag" type="radio" value="option23" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "morocco"} onClick={() => Connected.setPaisFlag("morocco")}  />
                </label>
                <label className="radio control-radio">
                    <p>Mexico</p>
                    <input className="select_value_flag" type="radio" value="option24" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "mexico"} onClick={() => Connected.setPaisFlag("mexico")}  />
                </label>
                <label className="radio control-radio">
                    <p>Portugal</p>
                    <input className="select_value_flag" type="radio" value="option25" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "portugal"} onClick={() => Connected.setPaisFlag("portugal")}  />
                </label>
                <label className="radio control-radio">
                    <p>Poland</p>
                    <input className="select_value_flag" type="radio" value="option26" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "poland"} onClick={() => Connected.setPaisFlag("poland")}  />
                </label>
                <label className="radio control-radio">
                    <p>Qatar</p>
                    <input className="select_value_flag" type="radio" value="option27" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "qatar"} onClick={() => Connected.setPaisFlag("qatar")}  />
                </label>
                <label className="radio control-radio">
                    <p>Serbia</p>
                    <input className="select_value_flag" type="radio" value="option28" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "serbia"} onClick={() => Connected.setPaisFlag("serbia")}  />
                </label>
                <label className="radio control-radio">
                    <p>Switzerland</p>
                    <input className="select_value_flag" type="radio" value="option29" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "switzerland"} onClick={() => Connected.setPaisFlag("switzerland")}  />
                </label>
                <label className="radio control-radio">
                    <p>Senegal</p>
                    <input className="select_value_flag" type="radio" value="option30" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "senegal"} onClick={() => Connected.setPaisFlag("senegal")}  />
                </label>
                <label className="radio control-radio">
                    <p>Uruguay</p>
                    <input className="select_value_flag" type="radio" value="option31" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "uruguay"} onClick={() => Connected.setPaisFlag("uruguay")}  />
                </label>
                <label className="radio control-radio">
                    <p>Tunisia</p>
                    <input className="select_value_flag" type="radio" value="option32" readOnly={true} name="radioFlags " checked={Connected.paisFlag === "tunisia"} onClick={() => Connected.setPaisFlag("tunisia")}  />
                </label>
            </div>
        </div>
  )
}

export default SelectFlags