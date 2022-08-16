import { AiOutlineSearch } from "react-icons/ai";

function Searchingjob({data}){


  
  return (
    <div className="customize-part">
      <div className="">
        <div className="offering">
          <div className="offering-Saved">
            <h1>
              Saved job <span>4</span>
            </h1>
          </div>
          <div className="offering-application">
            <h1>
              Apply Job <span>10</span>
            </h1>
          </div>
        </div>
        <div className="chosing">
          <div class="select">
            <select name="job">
              <option selected disabled>
                Location
              </option>
              <option value="1">Hà Nội</option>
              <option value="2">Đà Nẵng</option>
              <option value="3">Hồ Chí Minh</option>
            </select>
          </div>
          <div class="select">
            <select name="job">
              <option selected disabled>
                Distance
              </option>
              <option value="1">Far</option>
              <option value="2">Near</option>
              <option value="3">Over 50 km</option>
            </select>
          </div>
          <div class="select">
            <select name="job">
              <option selected disabled>
                Salary
              </option>
              <option value="1">10 milion</option>
              <option value="2">20 milion</option>
              <option value="3">Over 25 milion</option>
            </select>
          </div>
          <div class="select">
            <select name="job">
              <option selected disabled>
                Jobs kind
              </option>
              <option value="1">Full-time</option>
              <option value="2">Part-time</option>
              <option value="3">All</option>
            </select>
          </div>
        </div>
{/* onChange={e=>{filter(e)}} */}

{/* Đây là input tìm kiếm job */}

        {/* <div className="input-searching">
          <input type="text"  placeholder="Enter your jobs..." />
        
          <span>
            <AiOutlineSearch></AiOutlineSearch>
          </span>
        </div> */}
      </div>
    </div>
  );
}


export default Searchingjob;


// Đây là ví dụ consolog ra API laravel


// import React, { Component } from 'react'
// import axios from 'axios';
// import DataTable from "react-data-table-component";
// import '../asset/show.css'

// export default class ShowProduct extends Component {
//     constructor (props){
//         super(props);
//         this.state= {
//             products:[],
//         };
//     }
//     async componentDidMount() {
//         await axios.get(`http://127.0.0.1:8000/api/get-product`)
//         .then(res => {
//           this.setState(()=>({products:res.data}));
//         })
//       }
//       handleSearch(e) {
//             let request = {
//                 params:{
//                     keyword: e.target.value
//                 }
//             }
//             axios.get("http://127.0.0.1:8000/api/get-product-by-keyword", request)
//             .then((res)=>{
//                 this.setState({
//                     products: res.data
//                 })
//             })
//         }
//   render() {
//     return (
//         <div className="container">
//           <div className="text-center my-4">
//       <input
//             placeholder="Search..."
//             onChange={(e) => {
//               this.handleSearch(e);
//             }}
//           />
//           <br />
//         </div>
//         <h1>Welcome our homepage</h1>
//            <tbody>
//             <div className='showproduct'>
//               {
//                 this.state.products.map((pro,index)=>(
//                   <div className='show' key={index}>
//                       {/* <td>{index +1 }</td> */}
//                       <h2>{pro.name}</h2>
//                       <p>{pro.description}</p>
//                       <p>{pro.unit_price} VND</p>
//                       <p>{pro.promotion_price} VND</p>

//                       <p><img style={{width:"200px", height:"200px"}} src={"./image/product/"+pro.image} alt='file'></img></p>

//                  <button>Buy Now</button>
//                   </div>
//                 ))
//               }
//               </div>
//            </tbody>
//     </div>
//     )
//   }
// }