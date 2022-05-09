import React from 'react'
import {title} from '../api/request'
import Cards from '../components/Cards'

const Movies = () => {
  return (
    <div className='main-page movie'>
      <Cards row_title= "Upcoming Movies" type="movie" category= {title[4]} />
      <Cards row_title= "Popular Movies" type="movie" category= {title[2]} />
      <Cards row_title= "Kannada Movies" type="movie" category= {title[15]} />
      <Cards row_title= "Action Movies" type="movie" category= {title[7]} />
      <Cards row_title= "Streaming on Netflix" type="movie" category= {title[5]} />
      <Cards row_title= "Horror Movies" type="movie" category= {title[9]} />
      <Cards row_title= "Streaming On Prime Video" type="movie" category= {title[6]} />
      <Cards row_title= "Top-rated Movies" type="movie" category= {title[2]} />
      <Cards row_title= "Hindi Movies" type="movie" category= {title[17]} />
      <Cards row_title= "Tamil Movies" type="movie" category= {title[16]} />
      <Cards row_title= "Telugu Movies" type="movie" category= {title[18]} />
    </div>
  )
}

export default Movies