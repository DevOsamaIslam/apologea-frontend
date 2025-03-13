import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, IconButton } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

interface CarouselProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  autoplay?: number
  pagination?: boolean
  navigation?: boolean
}

const Carousel = <T,>({
  items,
  renderItem,
  autoplay,
  pagination = true,
  navigation = true,
}: CarouselProps<T>) => {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex(prev => (prev + 1) % items.length)
  const prevSlide = () =>
    setIndex(prev => (prev - 1 + items.length) % items.length)
  const item = items[index]

  // Auto-play effect
  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(nextSlide, autoplay)

    return () => clearInterval(timer)
  }, [autoplay, items.length, index])

  return (
    <Box position="relative" width="100%" height="100%" overflow="hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {item && renderItem(item)}
        </motion.div>
      </AnimatePresence>

      {navigation && (
        <>
          <IconButton
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
            }}
          >
            <ArrowForward />
          </IconButton>
        </>
      )}

      {pagination && (
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          sx={{ transform: 'translateX(-50%)', display: 'flex', gap: 1 }}
        >
          {items.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: i === index ? 'white' : 'gray',
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default Carousel
