import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import userImage from '../../../public/user-image.jfif'
import Answers from '../../Pages/Answers';
const Header = () => {

    const navigate = useNavigate()

    const rederict = ()=>{
        navigate('../../Pages/Answers.jsx')
    }
    return (
        <nav className='flex justify-between items-center'>
            <div >
                <h2 className='font-bold md:text-4xl '>Knowledge is Power</h2>
            </div>
            <div className='md:w-[25%] w-[50%] flex justify-around items-center' >
                <button className='mr-4 md:text-lg text-sm hover:#60a5fa' onClick={()=>rederict}>Blogs</button>
                <a className='mr-4 md:text-lg text-sm hover:#60a5fa' href="Login">Login</a>
                <img className='w-[10%] rounded-full' src={userImage} alt="" />
            </div>
            <Routes>
                <Route  path='../../Pages/Answers.jsx' element={<Answers />}></Route>
            </Routes>
        </nav>
    );
};

export default Header;