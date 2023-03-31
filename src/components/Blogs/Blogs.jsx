import React from 'react';
import userImage from '../../../public/user-image.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blogs = (props) => {
    const { id, name, time, img, title, date ,user} = props.singleData
    const handleTime = props.handleTime
    const handleBookmark = props.handleBookmark
    
    return (
        <div>
            <div className='mb-10 p-4'>
                <img className='rounded-md' src={img} alt="" />
                <div className=' flex h-20 md:mt-5 mt-6 justify-between items-center'>
                    <div className='flex items-center w-[70%]'>
                        <img className='md:w-[10%] w-[20%] rounded-full ' src={user} alt="" />
                        <div className='ml-4 w-[40%]'>
                            <h3 className='md:text-lg font-bold'>{name}</h3>
                            <p className=' md:text-base text-xs font-semibold  text-gray-500 '>{date} (4 Days Ago)</p>
                        </div>
                    </div>
                    <div className='flex gap-4  '>
                        <p className='font-semibold  text-gray-500'>{time} min read </p>
                        <p onClick={()=>handleBookmark(props.singleData)} className='mr-3'>
                        <FontAwesomeIcon icon={faBookmark} />
                            </p>
                    </div>
                </div>

                <div className='md:w-[70%] w-[100%] md:mt-0 mt-4 flex flex-col items-start'>
                    <h1 className='md:text-3xl mb-5 font-extrabold'>{title}</h1>
                    <a href='javascript:void(0);' onClick={()=>handleTime(time)} className='underline underline-offset-1 text-lg text-indigo-800 hover:text-indigo-400'>Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default Blogs;