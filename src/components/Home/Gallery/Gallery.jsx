import React, { useRef } from 'react';
import med1 from "../../../images/med1.jpg";
import med2 from "../../../images/med2.jpg";
import med3 from "../../../images/med3.jpg";
import med4 from "../../../images/med4.jpg";
import med5 from "../../../images/med5.jpg";
import med6 from "../../../images/med6.jpg";
import med7 from "../../../images/med7.jpg";
import med8 from "../../../images/med8.jpg";
import med9 from "../../../images/med9.jpg";
import med10 from "../../../images/med10.jpg";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const galleryimages = [med1, med2, med3, med4, med5, med6, med7, med8, med9, med10];

const Gallery = () => {

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        {/* <SubHeading title="Instagram"/> */}
        <h3>Instagram</h3>
        <h1 className='headtext__cormorant'>Medical Survey</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: "2rem" }}>Often the people in society who are in need are the most overlooked. Society and governments aren't set up to protect everyone who needs it. That's why charities are here to fill the gaps and provide dedicated resources to help the most vulnerable.</p>
        <Button type='primary' htmlType='submit' shape='round' size='large' onClick={() => handleClick}>View More</Button>
      </div>
      <div className='app__gallery-images' style={{ border: "1px solid black" }}>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryimages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-$(index + 1)`}>
              <img src={image} alt='gallery' />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
