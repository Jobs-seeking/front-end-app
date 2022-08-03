import Tab from './/../../core-ui/Joblisting/Tab'
import Avatar from './/../../core-ui/Joblisting/Avatar'
import { TiMediaRecord } from "react-icons/ti";
import { render } from '@testing-library/react';
const Savingjob=({data})=>{
    console.log(data);
    return(
    <div className='saving-descrpition'>
        <div className='savingdesc'>
            <div className='savingdesc__image'>
                <Avatar imagejob={data === undefined ? "":data.image}></Avatar>
            </div>
            <div className='savingdesc__tab'>
                <Tab  location={data === undefined ? "":data.location}  salaryjob={data === undefined ? "":data.salaryjob} ></Tab>
            <h3>{data === undefined ? "":data.timepostjob}</h3>
            </div>
            <div className='savingdesc__save'>
            <h2> Save  </h2> 
            </div>
            <div className='savingdesc__apply'>
            <h2> Apply</h2>
            </div>
        </div>
        <hr></hr>
        <div className='jobdescription'>
            <h1>Job description</h1>
            <p>{data === undefined ? "":data.detailjob}</p>
        </div>
        <div className='reference-needs'>
        <table className='table-des'>
            <thead className='title-requir'>
            <th>Skills needed</th>
            <th>Industry</th>
            <th>Imployment type</th>
            </thead>
            <tbody>
            <tr className='name-requir'>
            <td className='icon-pur'><span><TiMediaRecord></TiMediaRecord></span>HTML</td>
            <td className='icon-pur'><span><TiMediaRecord></TiMediaRecord></span>Infor</td>
            <td className='icon-pur'><span><TiMediaRecord></TiMediaRecord></span>Full</td>
            </tr>
            <tr className='name-requir'>
            <td className='icon-pur'><span><TiMediaRecord></TiMediaRecord></span>HTML</td>
            <td className='icon-pur'><span><TiMediaRecord></TiMediaRecord></span>Full</td>
            </tr>
            </tbody>
            </table>
        </div>
    </div>
)
}

export default Savingjob;