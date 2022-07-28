import { useState } from 'react';
import Offeringjob from '../layouts/Joblistingg/Offeringjob';
import Savingjob from '../layouts/Joblistingg/Savingjob';
function OfferingJobContainer(){

    // const [] = useState([]);
    return(
        <div className='container-components'>
        <div className='Offering-part'>
            <Offeringjob></Offeringjob>
            <Offeringjob></Offeringjob>
            <Offeringjob></Offeringjob>
            <Offeringjob></Offeringjob>
            <Offeringjob></Offeringjob>
            <Offeringjob></Offeringjob>
            <Offeringjob></Offeringjob>
            <Offeringjob></Offeringjob>
        </div>
        <div className='lef-component'>
            <Savingjob></Savingjob>
        </div>
    </div>
    )
}          
export default OfferingJobContainer;