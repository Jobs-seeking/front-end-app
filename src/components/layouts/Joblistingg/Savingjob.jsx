import Tab from './/../../core-ui/Joblisting/Tab'
import Avatar from './/../../core-ui/Joblisting/Avatar'
import { TiMediaRecord } from "react-icons/ti";
function Savingjob(){
    return(
    <div className='Saving-descrpition'>
        <div className='Savingdesc'>
            <div className='Savingdesc__image'>
                <Avatar></Avatar>
            </div>
            <div className='Savingdesc__tab'>
            <Tab></Tab>
            <h3>1 day ago</h3>
            </div>
            <div className='Savingdesc__save'>
            <h2> Save</h2>
            </div>
            <div className='Savingdesc__apply'>
            <h2> Apply</h2>
            </div>
        </div>
        <hr></hr>
        <div className='Jobdescription'>
            <h1>Job description</h1>
            <p>Shipping companies, as well as grain trade senior Treasury minister under Thatcher, said: “Mrs Thatcher strongly believed that cutting the deficit came before cutting taxes. She also believed that deficits were simply deferred taxation.” Malcolm Rifkind said that he was as “certain as I can be that she would be very unimpressed by funding tax cuts through increased borrowing, even if it wasn’t at a time of high inflation – but certainly when it is”
            <br></br>She also believed that deficits were simply deferred taxation.” Malcolm Rifkind said that he was as “certain as I can be that she would be very unimpressed by funding tax cuts through increased borrowing, even if it wasn’t at a time of high inflation – but certainly when it is”.

 said. “That’s what Thatcherism means. I think every single Tory, as well as lots of other people, believe in the desirability of tax cut.</p>
        </div>
        <div className='Reference-needs'>
        <table>
            <thead>
            <th>Skills needed</th>
            <th>Industry</th>
            <th>Imployment type</th>
            </thead>
            <tbody>
            <tr>
            <td><span><TiMediaRecord></TiMediaRecord></span>HTML</td>
            <td><span><TiMediaRecord></TiMediaRecord></span>Information</td>
            <td><span><TiMediaRecord></TiMediaRecord></span>Full-time</td>
            </tr>

            <tr>
            <td><span><TiMediaRecord></TiMediaRecord></span>HTML</td>
            <td><span><TiMediaRecord></TiMediaRecord></span>Information</td>
            <td><span><TiMediaRecord></TiMediaRecord></span>Full-time</td>
            </tr>

            <tr>
            <td><span><TiMediaRecord></TiMediaRecord></span>HTML</td>
            <td><span><TiMediaRecord></TiMediaRecord></span>Information</td>
            <td><span><TiMediaRecord></TiMediaRecord></span>Full-time</td>
            </tr>
            </tbody>
            </table>
        </div>
    </div>
)
}
export default Savingjob;