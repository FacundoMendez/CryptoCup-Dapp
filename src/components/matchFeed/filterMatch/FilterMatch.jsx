import React, {useEffect} from 'react'
import "./filterMatch.css"
import filterMatchFucional from './filterMatchFucional'

const FilterMatch = () => {

    useEffect(() => {
        filterMatchFucional()
    },[])

  return (
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
  )
}

export default FilterMatch