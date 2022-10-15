import React, {useEffect, useState} from 'react'
import "./filterMatch.css"
import filterMatchFucional from './filterMatchFucional'
import filterImg from "../../config/src/filter.png"
import busquedaImg from "../../config/src/busqueda.png"
import api from '../../../api'


const FilterMatch = ({filterBusqueda, setFilterBusqueda , setMatchs , getMatchs}) => {

    useEffect(() => {
        filterMatchFucional()
    },[])

    /* busqueda desktop */
    const busqueda = async e =>{
        const team = document.querySelector("#filterTeam").value
        console.log("buscando..." + team);
        e.preventDefault()
        setFilterBusqueda(team)
        if (team !== "") {
            const res = await api.get(`/matches/getFileteredByTeam/${team}`) 
            setMatchs(res.data); 
        }
    }

    /* busqueda Movile */

    const busqueda_movile = async e =>{
        const team = document.querySelector("#filterTeam_movile").value
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
            {/* <div className="filter filter1"> 
                SORT BY 
                <div className="triangleFilter triangleFilter1"></div>
            </div>
            <div className="boxFilter boxFilter1">
            
            </div> */}

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
            {/*
            <div className="filter filter3"> 
                STATUS 
                <div className="triangleFilter triangleFilter3"></div>
            </div>
            <div className="boxFilter boxFilter3">
            
            </div>

            <div className="filter filter4"> 
                GAME 
                <div className="triangleFilter triangleFilter4"></div>
            </div>

            <div className="boxFilter boxFilter4">
            
            </div>
 */}
        </div>

        <div className="filterMatch_movil">
            <img className='toggle_filter' src={filterImg} alt="filter logo" />

            <div className="box_filterMatch_movil">
      {/*           <div className=" filter1_movil"> 
                    SORT BY 
                    <div className="triangleFilter triangleFilter1"></div>
                </div>
                <div className=" boxFilter1">
                
                </div> */}

            <div className="filter filter2_movile"> 
                TEAM 
                <div className="triangleFilter triangleFilter2_movile"></div>
            </div>
             <div className="boxFilter_movile boxFilter2_movile">
                <form className='formMatch_movile' action="POST" onSubmit={busqueda_movile}>
                    <input type="text" name="buscadorPaises_movile" placeholder='Search country'  onChange={inputValue}  id='filterTeam_movile' />
                    <button className='buttonSubmitMatch_movile' type="submit">
                        <img className='busquedaMatchFeed_movile' src={busquedaImg} alt="busqueda" />    
                    </button> 
                </form>
            </div>
                
{/* 
                <div className=" filter3_movil"> 
                    STATUS 
                    <div className="triangleFilter triangleFilter3"></div>
                </div>
                <div className=" boxFilter3">
                
                </div>

                <div className=" filter3_movil"> 
                    GAME 
                    <div className="triangleFilter triangleFilter4"></div>
                </div>

                <div className=" boxFilter4">
                
                </div>            */}
            </div>
        
        </div>
    </div>
  )
}

export default FilterMatch