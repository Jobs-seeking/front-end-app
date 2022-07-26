import React from "react"
import PartnerLogo from "../core-ui/PartnersLogo"
export default function PnvPartners() {
    return (
        <section className="content--pnv-partners">
            <div className='title--pnv-partners'>
                <h1>PNV'S partners.</h1>
                <span></span>
            </div>
            <div className='pnv--partner-items' >
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
                <PartnerLogo/>
            </div>
        </section>
    )
}