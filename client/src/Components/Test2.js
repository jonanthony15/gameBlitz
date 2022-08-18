import React, {useState, useEffect} from 'react';
import ReactDom, { render } from 'react-dom';
import axios from 'axios';

const Record = (props) => {
  // const { fld_img, fld_title, fld_price } = props;

  return (
    <div className="">
      <img src={props.record.fld_img} alt={props.record.fld_title} />
      <h1>{props.record.fld_title}</h1>
      <h4>{props.record.fld_price}</h4>
    </div>
  );
};

const Test2 = () =>
{
  const [records, setRecords] = useState([]);

  // const getData = () =>
  // {
  //   axios
  //     .get("http://localhost:3000/record/")
  //     .then((response) => {
  //       // this.setState({ records: response.data });
  //       setRecords(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  useEffect(() =>
  {
    axios
      .get("http://localhost:3000/record/")
      .then((response) => {
        // this.setState({ records: response.data });
        setRecords(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function recordList()
  {
    return (
      <div>
        {records.map((record) =>
        {
          return (
            <Record
              record={record}
              key={record._id}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <h1>eh</h1>
      {recordList()}
    </div>
  );
}



export default Test2;