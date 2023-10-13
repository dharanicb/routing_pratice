import React, { createContext, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const UserContext = createContext([])
let values;

const ProfileDetils = ({ children }) => {
const [profile, setProfile] = useState({name: "" , email : "" , phoneNo : "" , dateOfBirth : "" , occupation : "" ,address : ""})
const [profileObject, setProfileObject] = useState([])

// console.log(profileObject)
const navigate = useNavigate();


values = profileObject


const onSubmitDetails = (event) => {
    event.preventDefault()
    const newProfile = {
        id : uuidv4(),   
        name: profile.name , 
        email : profile.email , 
        phoneNo : profile.phoneNo , 
        dateOfBirth : profile.dateOfBirth, 
        occupation : profile.occupation ,
        address : profile.address,
    }
    // console.log(newProfile)
    setProfileObject(prev => [...prev, newProfile]) 
}

const onCheckDetails = () => {
  navigate("/user" , {state : profileObject})
}
localStorage.setItem("profile",JSON.stringify([...profileObject]))

const rendering = () => {
  console.log("rendering")
}
// useEffect (() => {
//   navigate("/user" , {state : profileObject})
// },[profileObject]) 

  return (
    <form className='displays mt-[4%] text-center' onSubmit={onSubmitDetails}>
        <h1 className='mb-[10px]'>Create Profile</h1>
        <div className='mt-[10px]'>
            <label htmlFor='name'>Name :</label>
            <input type="text" id = "name" className='ml-[60px]' onChange={e => setProfile({...profile,name:e.target.value})}/><br></br>
            <label className='mt-[10px]' htmlFor='email'>Email :</label>
            <input type="email" id = "email" className='ml-[60px]' onChange={e => setProfile({...profile,email:e.target.value})}/><br></br>
            <label className='mt-[10px]' htmlFor='phone'>phone number :</label>
            <input type="phone" id = "phone" className='ml-[5px]'onChange={e => setProfile({...profile,phoneNo:e.target.value})}/><br></br>
            <label className='mt-[10px]' htmlFor='date'>Date of birth :</label>
            <input type="date" id = "date" onChange={e => setProfile({...profile,dateOfBirth:e.target.value})}/><br></br>
            <label className='mt-[10px]' htmlFor='occupation'>Occupation:</label>
            <input type="text" id = "occupation" className='ml-[28px]'onChange={e => setProfile({...profile,occupation:e.target.value})}/><br></br>
            <label className='mt-[10px]' htmlFor='address'>Address :</label>
            <input type="text" id = "address" className='ml-[40px]' onChange={e => setProfile({...profile,address:e.target.value})}/><br></br>
            <button className='button' type='submit'>Submit</button>
            <button className='button' onClick={onCheckDetails}>Check UserDetils</button>
        </div>  
    </form>
  )

}


const UserData = ({ children }) =>(
  <UserContext.Provider value={values}>
    {children}
  </UserContext.Provider>
)

export {UserContext,ProfileDetils,UserData}
// export ProfileDetils

console.log(values)
// ProfileDetils().rendering()