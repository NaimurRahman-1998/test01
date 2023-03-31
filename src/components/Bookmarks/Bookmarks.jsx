import React, { useEffect } from 'react';

const Bookmarks = ({ time, data }) => {
    // console.log(time)
    // let sumTime= 0;
    // sumTime = sumTime + time;
    
    let sumOfTime = 0;
    for (const singleTime of time) {
        sumOfTime = sumOfTime + singleTime
        // console.log(sumOfTime)
    }
    return (
        <div className='sticky top-20 right-0'>
            <div className='mb-5 border-2 rounded-md bg-indigo-100 border-indigo-500'>
                <h1 className='font-bold text-lg text-violet-800 px-10 py-5 text-center'>Spent Time on Read :{sumOfTime} min</h1>
            </div>
            <div className='border-2 bg-zinc-200 rounded-md border-zinc-200'>
                <h1 className='font-bold text-xl mt-3 text-center'>Bookmarked Blogs: {data.length}</h1>
                <div className='ml-5 mr-5 font-bold text-lg px-1 py-1 text-center' >
                    {
                        data.map((singleData)=><h1 className='bg-white rounded-md mt-5 mb-5 px-2 py-2'>{singleData.title}</h1>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;