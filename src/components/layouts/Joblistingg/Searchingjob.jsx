import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../../core-ui/Button";

const Searchingjob = (props) => {
  const [searchFields, setSearchFields] = useState({});

  const onChangeHandle = (e) => {
    setSearchFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    props.searchHandle(searchFields);
  }, [searchFields]);

  const resetFilter = () => {
    setSearchFields({
      technical: "",
      location: "",
      min: null,
      max: null,
      title: "",
      type: "",
    });
  };
  return (
    <div className="searching__container">
      <div className="searching__filter__list">
        <div className="searching__item">
          <input
            name="technical"
            className="search__technical"
            type="text"
            placeholder="Technical..."
            onChange={onChangeHandle}
            value={searchFields.technical ?? ""}
          />
        </div>
        <div className="searching__item">
          <select
            name="location"
            value={searchFields.location ?? ""}
            onChange={onChangeHandle}
          >
            <option value="">Location</option>
            <option value="ha noi">Hà Nội</option>
            <option value="da nang">Đà Nẵng</option>
            <option value="ho chi minh">Hồ Chí Minh</option>
          </select>
        </div>

        <div className="searching__item">
          <div className="searching__item--range">
            <div className="searching__item--range__item">
              <label htmlFor="min">min</label>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                name="min"
                id="min"
                className="min"
                onClick={onChangeHandle}
                defaultValue={searchFields.min ?? 100}
              />
              <output>${searchFields.min ?? 100}</output>
            </div>
            <div className="searching__item--range__item">
              <label htmlFor="max">max</label>
              <input
                type="range"
                min="1000"
                max="5000"
                step="100"
                name="max"
                id="max"
                className="max"
                onClick={onChangeHandle}
                defaultValue={searchFields.max ?? 5000}
              />
              <output>${searchFields.max ?? 5000}</output>
            </div>
          </div>
        </div>
        <div className="searching__item">
          <input
            name="title"
            className="search__title"
            type="text"
            placeholder="Title..."
            onChange={onChangeHandle}
            value={searchFields.title ?? ""}
          />
        </div>
      </div>
      <div className="searching__filter__reset">
        <div className="searching__item">
          <select
            name="type"
            value={searchFields.type ?? ""}
            onChange={onChangeHandle}
          >
            <option defaultChecked value="">Job type</option>
            <option value="Mobile">Mobile</option>
            <option value="Testing">Testing</option>
            <option value="Front end">Front end</option>
            <option value="Back end">Back end</option>
            <option value="Full Stack">Full Stack </option>
            <option value="BA">BA</option>
          </select>
        </div>
        <Button onClick={resetFilter}>Reset filter</Button>
      </div>
    </div>
  );
};

export default Searchingjob;
