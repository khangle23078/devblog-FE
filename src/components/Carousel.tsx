import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Post } from '../interfaces/post';
import { API_RESPONSE } from '../interfaces/response';
import Banner from './Banner';

interface CarouselProps {
  data: API_RESPONSE<Post[]> | undefined
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]}>
        {data?.data.map((post: Post) => {
          return (
            <SwiperSlide>
              <Banner post={post} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel