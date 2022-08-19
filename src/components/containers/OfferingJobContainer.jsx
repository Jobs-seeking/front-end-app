
import JobItem from "./jobItem";

const OfferingJobContainer = ({data})=> {
  return (
    <div className="job-list__container">
    {data.map((jobs, index)=>{
        return (<JobItem dataItem={jobs} key={index} />);
    })}
    </div>
  );
}
export default OfferingJobContainer;