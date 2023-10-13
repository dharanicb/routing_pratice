import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';



const UserDatails = () => {
  const [data, setData] = useState(null)
  const location = useLocation();
  console.log(location.state);
  // const profileData = location.state;

  // const data = useRef(profileData);

  useEffect(() => {
    console.log("use effect")
    setData(location.state)
  },[data])

  console.log(data);
  return (
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
            {/* <td>{person.email}</td> */}
          </tr>
        )): null
        }
        
      </tbody>
    </table>
  );
}

export default UserDatails