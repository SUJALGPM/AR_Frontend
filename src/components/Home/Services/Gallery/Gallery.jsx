import React,{useRef} from 'react';
import { SubHeading } from '../../components';
import { images} from '../../constants';
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import './Gallery.css';

const galleryimages = [images.sort1,images.sort2,images.sort3,images.sort4,images.sort5,images.sort6,images.sort7,images.sort8,images.sort9,images.sort10,images.sort11]

const Gallery = () => {

  const scrollRef = useRef(null);
  const scroll = (direction) =>{
      const{ current } =  scrollRef;

      if(direction === 'left'){
        current.scrollLeft -= 300;
      }else{
        current.scrollLeft += 300;
      }
  }

  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
          <SubHeading title="Instagram"/>
          <h1 className='headtext__cormorant'>Charity Survey</h1>
          <p className='p__opensans' style={{ color: '#AAA', marginTop: "2rem" }}>Often the people in society who are in need are the most overlooked. Society and governments aren't set up to protect everyone who needs it. That's why charities are here to fill the gaps and provide dedicated resources to help the most vulnerable.</p>
          <button type='button' className='custom__button'>View More</button>
      </div>
      
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
            {galleryimages.map((image, index) => (
                <div className='app__gallery-images_card flex__center' key={`gallery_image-$(index + 1)`}>
                    <img src={image} alt='gallery' />
                    <BsInstagram className='gallery__image-icon'/>
                </div>
            ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
