import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const GetUsers = () => {
  const [state, setState] = useState([]);
  const [thead, setThead] = useState([]);
let navigate=useNavigate()
// let x=()=>{
//     navigate("/add")
// }
  useEffect(() => {
    axios.get("http://localhost:2005/users")
      .then((res) => {
        setState(res.data);
          setThead(Object.keys(res.data[0]).slice(0, 4)); 
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [state]);
  function del(id)
  {
    axios.delete("http://localhost:2005/users/" +id)
    .then(()=>
    {
        navigate("/")
    })
  }
  return(
    <table border={1}>
     <caption>
         <strong>CRUD OPERATIONS</strong><br />
         <button onClick={()=>navigate("/add")}>Add+</button>
     </caption>
     <thead>
         <tr >
             {thead.map((x,index)=><th key={index} >{x}</th>)}
             <th>Opeartions</th>
         </tr>
     </thead>
     <tbody>
        {state.map(y=>
               (
                <tr key={y.id}>
                    <td>{y.id}</td>
                    <td>{y.name}</td>
                    <td>{y.username}</td>
                    <td>{y.email}</td>
                    <td>
                        <Link to={`/edit/${y.id}`}><button>Edit</button></Link>
                        <button onClick={()=>del(y.id)}>Delete</button>
                    </td>
                </tr>
            )
        )}
     </tbody>
    </table>
 )
}
export default GetUsers