import React from 'react';
import { ReactComponent as BannerPN } from "../../assets/images/BannerPN.svg"
import PnvPartners from '../containers/PnvPartners';
import Button from '../core-ui/Button';
export default function Home() {
    return (
        <section className="content">
            <div className="titel">
                <h1>THE CONNECTION STUDENTS & BUSINESSES</h1>
            </div>
            <div className="banner">
                <BannerPN />
            </div>
            <div className='content--btn'>
                <Button buttonStyle="btn--outline">LOGIN</Button>
                <Button>SIGN UP</Button>
            </div>
           <PnvPartners/>
        </section>
    )
}

// import React from 'react';
// import Content from '../layouts/Content';
// // import Footer from '../layouts/Footer';
// // import  Header  from '../layouts/Header';
// export default function Home() {
//   return(
//       <div>
//         <Content/>
//       </div>
//   )
// }

