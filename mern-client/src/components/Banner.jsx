import React from 'react'
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 '>
            {/*left side*/}
            <div className='md:w-1/2 space-y-8 h-full'>
              <h2 className='text-6xl font-bold loading-snug text-black'><span className='text-blue-700'>Buy Books</span> <br/>For Your Loved Ones</h2>
              <p className='md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat, amet! Odio ipsum similique quae perferendis ab deserunt debitis ipsam repudiandae voluptate,
                 a molestias doloremque porro illum totam laudantium eaque odit.</p>
             <div>
              <input type="search" name="search" id="search" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none' />
              <button className='bg-blue-700 text-white py-2 px-6 rounded-s-sm hover:bg-blue-800'>Search</button>
             </div>
            </div>

            {/*right side*/}
            <div>
              <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner;