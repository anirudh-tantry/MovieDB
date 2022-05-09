import React from 'react'
import {title} from '../api/request'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <div className='main-page home'>
      <Cards row_title= "Trending Now" category= {title[1]} />
      <Cards row_title= "Upcoming Movies" type="movie" category= {title[4]} />
      <Cards row_title= "Popular Movies" type="movie" category= {title[2]} />
      <Cards row_title= "Kannada Movies" type="movie" category= {title[15]} />
      <Cards row_title= "Popular Tv shows" type="tv" category= {title[2]} />
      <Cards row_title= "Top-rated Movies" type="movie" category= {title[3]} />
      <Cards row_title= "Streaming on Netflix" type="movie" category= {title[5]} />
      <Cards row_title= "Tamil Movies" type="movie" category= {title[16]} />
      <Cards row_title= "Streaming On Prime Video" type="movie" category= {title[6]} />
      <Cards row_title= "Telugu Movies" type="movie" category= {title[18]} />
      <Cards row_title="Streaming on Netflix" type="tv" category={title[5]} />
    </div>
  )
}

export default Home