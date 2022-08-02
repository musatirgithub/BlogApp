import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import BlogForm from '../components/BlogForm';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Register from '../pages/Register';
import PrivateRouter from './PrivateRouter';
import Profile from '../pages/Profile';
import UpdateBlog from '../pages/UpdateBlog';
import Details from '../pages/Details';
import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";

const AppRouter = () => {
  const {blogs} = useContext(AuthContext);

  return (
    <BrowserRouter>
    <Navbar />
        <Routes> 
            <Route path='/' element={<Dashboard />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/newblog' element={<NewBlog />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/updateblog' element={<UpdateBlog />}/>
            <Route path='/details/:id' element={<PrivateRouter />}>
              <Route path='' element={<Details />}/>
            </Route>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter