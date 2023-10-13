import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import Header from './Componets/Header';
import Home from './Componets/Home';
import CreateTodo from './Componets/CreateTodo';
import NotFound from './Componets/NotFound ';
import UserDatails from './Componets/UserDatails';
import {ProfileDetils} from './Componets/ProfileDetils';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/create" element={<CreateTodo/>} />
        <Route path = "/profile" element={<ProfileDetils/>} />
        <Route path = "/user" element={<UserDatails/>} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
