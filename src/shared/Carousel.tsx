import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  autoplay?: boolean
  loop?: boolean
  pagination?: boolean
  navigation?: boolean
}

const Carousel = <T,>({
  items,
  renderItem,
  autoplay = false,
  loop = true,
  pagination = true,
  navigation = true,
}: CarouselProps<T>) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 5000 } : false}
      loop={loop}
      style={{ display: 'flex', height: '100%' }}
    >
      {items.map((item, index) => (
        <SwiperSlide style={{ display: 'flex', height: '100%' }} key={index}>
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
