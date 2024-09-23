import React from 'react'
import Banner from '../components/Banner';
import BestSellerBooks from './BestSellerBooks';
import FavBook from './FavBook';
import PromoBanner from './PromoBanner';
import Otherbooks from './Otherbooks';
import Review from './Review';


const Home = () => {
  return (
    <div>
       <Banner/>
       <BestSellerBooks/>
       <FavBook/>
       <PromoBanner/>
       <Otherbooks/>
       <Review/>
    </div>
  )
}

export default Home;