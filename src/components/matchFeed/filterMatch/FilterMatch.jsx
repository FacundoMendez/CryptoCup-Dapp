import React, {useEffect} from 'react'
import "./filterMatch.css"
import filterMatchFucional from './filterMatchFucional'
import filterImg from "../../config/src/filter.png"

const FilterMatch = () => {

    useEffect(() => {
        filterMatchFucional()
    },[])



  return (
    <div className="container_filterMatch">
        <div className='filterMatch'>
            <div className="filter filter1"> 
                SHORT BY 
                <div className="triangleFilter triangleFilter1"></div>
            </div>
            <div className="boxFilter boxFilter1">
            
            </div>

            <div className="filter filter2"> 
                TEAM 
                <div className="triangleFilter triangleFilter2"></div>
            </div>
            <div className="boxFilter boxFilter2">
            
            </div>

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

        </div>

        <div className="filterMatch_movil">
            <img className='toggle_filter' src={filterImg} alt="filter logo" />

            <div className="box_filterMatch_movil">
                <div className=" filter1_movil"> 
                    SHORT BY 
                    <div className="triangleFilter triangleFilter1"></div>
                </div>
                <div className=" boxFilter1">
                
                </div>

                <div className=" filter2_movil"> 
                    TEAM 
                    <div className="triangleFilter triangleFilter2"></div>
                </div>
                <div className=" boxFilter2">
                
                </div>

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
                
                </div>           
            </div>
        
        </div>
    </div>
  )
}

export default FilterMatch