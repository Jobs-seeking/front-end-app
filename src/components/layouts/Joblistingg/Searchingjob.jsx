function Searchingjob(){
    return(
        <div className="Customize-part">
            <div className="Offering">
                <div className="Offering__Saved-jobs">
                    <h1>Saved job <span>4</span></h1>    
                </div>       
                <div className="Offering__application">
                    <h1>Apply Job <span>10</span></h1>    
                </div>  
            </div>
            <div>      
            </div>
            <div className="Chosing">
            <div class="select">
            <select name='job'>
                <option selected disabled>Location</option>
                <option value="1">Hà Nội</option>
                <option value="2">Đà Nẵng</option>
                <option value="3">Hồ Chí Minh</option>
            </select>
            </div>
            <div class="select">
            <select name='job'>
                <option selected disabled>Distance</option>
                <option value="1">Far</option>
                <option value="2">Near</option>
                <option value="3">Over 50 km</option>
            </select>
            </div>
            <div class="select">
            <select name='job'>
                <option selected disabled>Salary</option>
                <option value="1">10 milion</option>
                <option value="2">20 milion</option>
                <option value="3">Over 25 milion</option>
            </select>
            </div>
            <div class="select">
            <select name='job'>
                <option selected disabled>Jobs kind</option>
                <option value="1">Full-time</option>
                <option value="2">Part-time</option>
                <option value="3">All</option>
            </select>
            </div>
   
            </div>
            </div>
    )
    
}
export default Searchingjob;