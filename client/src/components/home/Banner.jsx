import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../Constant/Data'
import { styled } from '@mui/material'




const Image = styled('img')({
  width: '100%',
  height: 280,
  
 
})

const responsive = { 
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Banner = () => {
  return (
      <Carousel responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
  
      >
          {
              bannerData.map(image => (
                  <Image src={image.url} alt="banner" id={image.id} />
              ))
          }
      </Carousel>
  )
}

export default Banner;
