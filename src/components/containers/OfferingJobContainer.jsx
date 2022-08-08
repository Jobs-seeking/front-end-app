import { useEffect, useState } from 'react';
import Offeringjob from '../layouts/Joblistingg/Offeringjob';
import Savingjob from '../layouts/Joblistingg/Savingjob';
import axios from 'axios';
function OfferingJobContainer(){
    const [jobs,setJobs] = useState( {isLoaded: false, data:[]})
    const [detailJob,setDetailJob]= useState(0);
    const handleClick = (i)=>{
        setDetailJob(i);
    }
    const getData = () => {
        axios.get("https://629191d6cd0c91932b64d9c6.mockapi.io/job").then((res) => {
          setJobs({isLoaded:true,data:res.data});
        });
      };
      useEffect(() => {
          getData();
        }, []);
    return(
        <div className='container-components'>
        <div className='offering-part'>
            {jobs.isLoaded   ? <Offeringjob   onClickJob={handleClick}  data={jobs.data}></Offeringjob> : "loading..."}
        </div>
        <div className='lef-component'>
            {jobs.isLoaded ? <Savingjob  data={jobs.data[detailJob]}></Savingjob> : "loading..."}  
        </div>
    </div>
    )
}          
export default OfferingJobContainer;