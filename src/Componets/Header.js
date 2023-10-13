import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <ul className='flex flex justify-around'>
            <li className='m-[10px]'><Link to = "/">Home</Link></li>
            <li className='m-[10px]'><Link to = "/create">Create Todo</Link></li>
            <li className='m-[10px]'><Link to = "/profile">Create Profile</Link></li>
            <li className='m-[10px]'><Link to = "/user">User Datails</Link></li>
        </ul>
    </nav>
  )
}

export default Header