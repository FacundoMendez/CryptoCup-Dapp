import React, {useEffect, useState} from 'react'
import "./filterMatch.css"
import filterMatchFucional from './filterMatchFucional'
import filterImg from "../../config/src/filter.png"
import busquedaImg from "../../config/src/busqueda.png"
import api from '../../../api'


const FilterMatch = ({filterBusqueda, setFilterBusqueda , setMatchs , getMatchs}) => {

    useEffect(() => {
    /*     filterMatchFucional() */
    },[])


    //Busqueda status 
    const setMatchLives = async () => {
        console.log("apretao");
        const res = await api.get('/matches/getLiveMatches')
        setMatchs(res.data)
        console.log(res.data); 
    }


    /* Busqueda Fecha desktop */  




    /* Busqueda Fecha movile */  
    
    //es lo mismo que la de arriba pero cambiandole el id => id_movile (agregarlo al onSubmit de la clase movile )


    /* busqueda TEAM desktop */


    const busqueda = async e =>{
        const team = document.getElementById("filterTeam").value
        console.log("buscando..." + team);
        e.preventDefault()
        setFilterBusqueda(team)
        if (team !== "") {
            const res = await api.get(`/matches/getFileteredByTeam/${team}`) 
            setMatchs(res.data); 
        }
    }

    /* busqueda TEAM Movile */

    const busqueda_movile = async e =>{
        const team = document.getElementById("filterTeam_movile").value
        console.log("buscando..." + team);
        e.preventDefault()
        setFilterBusqueda(team)
        if (team !== "") {
            const res = await api.get(`/matches/getFileteredByTeam/${team}`) 
            setMatchs(res.data); 
        }
    }

    const inputValue = e => {
        if (e.target.value === "") getMatchs()
    } 





  return (
    <div className="container_filterMatch">
        <div className='filterMatch'>

            {/* FILTER FECHA */}

            <div className="filter filter1"> 
                DATE 
                <div className="triangleFilter triangleFilter1"></div>
            </div>
            <div className="boxFilter boxFilter1">
                <form className='formFecha' action="POST" onSubmit={busqueda}>
                    <input 
                        type="date" 
                        name="buscadorFecha" 
                        placeholder='Search date' 
                        onChange={inputValue}  
                        id='filterFecha' 
                        min="2022-10-1"
                    />
                     <button className='buttonSubmitMatch' type="submit">
                        <img className='busquedaMatchFeed' src={busquedaImg} alt="busqueda" />    
                    </button> 
                </form>
            </div>



            {/* FILTER TEAM */}

            <div className="filter filter2"> 
                TEAM 
                <div className="triangleFilter triangleFilter2"></div>
            </div>
             <div className="boxFilter boxFilter2">
                <form className='formMatch' action="POST" onSubmit={busqueda}>
                    <input type="text" name="buscadorPaises" placeholder='Search country'  onChange={inputValue}  id='filterTeam' />
                    <button className='buttonSubmitMatch' type="submit">
                        <img className='busquedaMatchFeed' src={busquedaImg} alt="busqueda" />    
                    </button> 
                </form>
            </div>


            {/* FILTER STATUS */}

            <div className="filter filter3"> 
                STATUS 
                <div className="triangleFilter triangleFilter3"></div>
            </div>
            <div className="boxFilter boxFilter3">
                <form className='formStatus' action="POST" onSubmit={busqueda}>
                    <p>
                        <input type="checkbox" id="filter_startIn" />
                        <label className='lab_filter' htmlFor="filter_startIn">Start In</label>
                    </p>
                    <p>
                        <input type="checkbox" id="filter_vivo"  /* onClick={setMatchLives} *//>
                        <label className='lab_filter' htmlFor="filter_vivo">LIVE</label>
                    </p>
                    <p>
                        <input type="checkbox" id="filter_finished" />
                        <label className='lab_filter' htmlFor="filter_finished">Finished</label>
                    </p>
                </form>
            </div>

        </div>

        <div className="filterMatch_movil">
            <img className='toggle_filter' src={filterImg} alt="filter logo" />

            <div className="box_filterMatch_movil">


                {/* filter fecha movile */}

                <div className="filter filter1_movile"> 
                    FECHA 
                    <div className="triangleFilter triangleFilter1_movile"></div>
                </div>
                <div className="boxFilter boxFilter1_movile">
                    <form className='formFecha' action="POST" /* onSubmit={busquedaFecha_movile} */>
                        <input 
                            type="date" 
                            name="buscadorPaises_movile" 
                            placeholder='Search country' 
                            onChange={inputValue}  
                            id='filterFecha_movile' 
                            min="2022-10-1"
                        />
                        <button className='buttonSubmitMatch_movile' type="submit">
                            <img className='busquedaMatchFeed_movile' src={busquedaImg} alt="busqueda" />    
                        </button> 
                    </form>
                </div>

                
                {/* filter team movile */}

                <div className="filter filter2_movile"> 
                    TEAM 
                    <div className="triangleFilter triangleFilter2_movile"></div>
                </div>
                <div className="boxFilter_movile boxFilter2_movile">
                    <form className='formMatch_movile' action="POST" onSubmit={busqueda_movile}>
                        <input 
                            type="text" 
                            name="buscadorPaises_movile" 
                            placeholder='Search country'  
                            onChange={inputValue}  
                            id='filterTeam_movile'
                        />
                        <button className='buttonSubmitMatch_movile' type="submit">
                            <img className='busquedaMatchFeed_movile' src={busquedaImg} alt="busqueda" />    
                        </button> 
                    </form>
                </div>



                {/* filter estado */}
                

                <div className="filter filter3_movile"> 
                    STATUS 
                    <div className="triangleFilter triangleFilter3"></div>
                </div>
                <div className="boxFilter boxFilter3_movile">
                    <form className='formStatus_movile' action="POST" onSubmit={busqueda}>
                        <p>
                            <input type="checkbox" id="filter_startIn" />
                            <label className='lab_filter' htmlFor="filter_startIn_movile">Start In</label>
                        </p>
                        <p>
                            <input type="checkbox" id="filter_vivo_movile"  />
                            <label className='lab_filter' htmlFor="filter_vivo">Vivo</label>
                        </p>
                        <p>
                            <input type="checkbox" id="filter_finished_movile" />
                            <label className='lab_filter' htmlFor="filter_finished">Finished</label>
                        </p>
                    </form>
                </div>


            </div>
        </div>
    </div>
  )
}

export default FilterMatch