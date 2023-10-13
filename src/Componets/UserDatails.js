import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './ProfileDetils';
// import { useLocation } from 'react-router-dom';

const list = JSON.parse(localStorage.getItem('profile'));

// console.log(list)
const UserDatails = () => {
  const [data, setData] = useState()
  const dataDetails = useContext(UserContext)
  console.log(dataDetails)
  // const location = useLocation();
  // const profileData = location.state;

  // const renderProcess = () =>(
  //   <tr key={data.id}>
  //           <td>{data.name}</td>
  //           <td>{data.email}</td>
  //           <td>{data.phoneNo}</td>
  //           <td>{data.dateOfBirth}</td>
  //           <td>{data.occupation}</td>
  //           <td>{data.address}</td>
  //           {/* <td>{person.email}</td> */}
  //         </tr>
  // )

  // const data = useRef(profileData);

  useEffect(() => {
    setData(list)
  },[data])

  // console.log(data);
  return (
    <div className='displays'>
    <table cellPadding = "10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date Of birth</th>
          <th>Occupation</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data ? 
        data.map((person) => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.phoneNo}</td>
            <td>{person.dateOfBirth}</td>
            <td>{person.occupation}</td>
            <td>{person.address}</td>
            {/* <td>{person.email}</td> */}
          </tr>
        )): null
        }
        
      </tbody>
    </table>
    </div>
  );
}

export default UserDatails