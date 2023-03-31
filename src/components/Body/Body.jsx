import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Bookmarks from '../Bookmarks/Bookmarks';
import { ToastContainer, toast } from 'react-toastify';

const Body = () => {
    const [allData, setAllData] = useState([])
    const [getTime, setGetTime] = useState([])
    const [getData, setGetData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    const handleTime = (time) => {
        setGetTime([...getTime, time]);
        // console.log(getTime)
    }

    const notify = () => toast("Already Bookmarked");

    const handleBookmark = (titleData) => {
        // console.log(getData.id)
        const addedBookmarks = getData.find((pd) => pd.id === titleData.id)
        if (!addedBookmarks) {
            setGetData([...getData, titleData])
        } else {
            notify()
        }
    }

    return (
        <main className='md:flex mt-10 gap-16'>
            <div className='blogs md:w-[70%] w-[100%]'>
                {
                    allData.map(singleData =>
                        <Blogs
                            handleTime={handleTime}
                            handleBookmark={handleBookmark}
                            singleData={singleData}
                            key={singleData.id}>
                        </Blogs>)
                }
            </div>

            <div className='bookmarks md:w-[30%] w-[100%]'>
                <Bookmarks
                    time={getTime}
                    data={getData}
                ></Bookmarks>
            </div>
        </main>
    );
};

export default Body;