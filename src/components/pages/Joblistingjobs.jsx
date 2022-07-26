import Offeringjob from '../layouts/Joblistingg/Offeringjob';
import Savingjob from '../layouts/Joblistingg/Savingjob';
import Searchingjob from '../layouts/Joblistingg/Searchingjob';

function Joblistingjobs(){
    return(
        <div className='overll-component'>
          <Searchingjob></Searchingjob>
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
        </div>
    )
}
            
export default Joblistingjobs;