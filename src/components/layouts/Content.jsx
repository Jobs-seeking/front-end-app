import React from "react"
import { ReactComponent as BannerPN} from "../../assets/images/BannerPN.svg"
export default function Content(){
    return(
        <section className="content">
            <div className="titel">
                <h1>THE CONNECTION STUDENTS & BUSINESSES</h1>

            </div>
            <div className="banner">
            <BannerPN/>
            </div>
        </section>
    )
}