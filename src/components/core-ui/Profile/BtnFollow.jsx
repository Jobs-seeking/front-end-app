import axios from "axios";
import Button from "../Button";
export default function BtnFollow( {companyId} ) {
  const follow = async () => {
    //post userIs and companyId to know who follow what company
    // axios.post()  http://..../user/1/folow/1
    const userId = sessionStorage.get("useId")
    await axios.post(`/user/${userId}/follow/${companyId}`)
  }
  return (
    <div className="btn-follow">
      <Button buttonStyle="btn--solid" onClick={follow}>Follow</Button>
    </div>
  );
}
