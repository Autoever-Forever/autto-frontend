import React, { useState } from 'react';
import styled from 'styled-components';
import MainProduct from './MainProduct';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const CardWrapper = styled(motion.div)<{ isCenter: boolean }>`
  position: absolute;
  width: ${({ isCenter }) => (isCenter ? '450px' : '380px')};
  height: ${({ isCenter }) => (isCenter ? '650px' : '550px')};
  transform-origin: center;
  cursor: pointer;
  filter: ${({ isCenter }) => (isCenter ? 'none' : 'brightness(0.7)')};
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;

  &:hover {
    background: white;
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }
`;

interface FeaturedCarouselProps {
  shows: any[];
}

const FeaturedCarousel = ({ shows }: FeaturedCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const getVisibleCards = () => {
    const cards = [];
    const totalShows = shows.length;

    // 이전 카드
    const prevIndex = (currentIndex - 1 + totalShows) % totalShows;
    cards.push({
      ...shows[prevIndex],
      position: -1,
      isCenter: false,
    });

    // 현재 카드
    cards.push({
      ...shows[currentIndex],
      position: 0,
      isCenter: true,
    });

    // 다음 카드
    const nextIndex = (currentIndex + 1) % totalShows;
    cards.push({
      ...shows[nextIndex],
      position: 1,
      isCenter: false,
    });

    return cards;
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % shows.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + shows.length) % shows.length);
  };

  const handleCardClick = (position: number, uuid: string, index: number) => {
    if (position === -1) {
      handlePrev();
    } else if (position === 1) {
      handleNext();
    }
  };

  const variants = {
    center: { 
      x: 0, 
      scale: 1, 
      zIndex: 3,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 1,
        opacity: { duration: 0.3 }
      }
    },
    left: { 
      x: '-120%',
      scale: 0.75,
      zIndex: 2,
      opacity: 0.6,
      rotateY: 25,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 1,
        opacity: { duration: 0.3 }
      }
    },
    right: { 
      x: '120%',
      scale: 0.75,
      zIndex: 2,
      opacity: 0.6,
      rotateY: -25,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 1,
        opacity: { duration: 0.3 }
      }
    },
    enterFromLeft: {
      x: '-150%',
      scale: 0.7,
      opacity: 0,
      rotateY: 35,
    },
    enterFromRight: {
      x: '150%',
      scale: 0.7,
      opacity: 0,
      rotateY: -35,
    },
    exitToLeft: {
      x: '-150%',
      scale: 0.7,
      opacity: 0,
      rotateY: 35,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 1,
        opacity: { duration: 0.3 }
      }
    },
    exitToRight: {
      x: '150%',
      scale: 0.7,
      opacity: 0,
      rotateY: -35,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 1,
        opacity: { duration: 0.3 }
      }
    }
  };

  return (
    <CarouselContainer>
      <NavigationButton className="prev" onClick={handlePrev}>
        ←
      </NavigationButton>
      <CarouselWrapper>
        <AnimatePresence initial={false} custom={direction}>
          {getVisibleCards().map((show) => (
            <CardWrapper
              key={`${show.id}-${show.position}`}
              isCenter={show.isCenter}
              custom={direction}
              initial={direction > 0 ? "enterFromRight" : "enterFromLeft"}
              animate={
                show.position === 0
                  ? 'center'
                  : show.position === -1
                  ? 'left'
                  : 'right'
              }
              exit={direction > 0 ? "exitToLeft" : "exitToRight"}
              variants={variants}
              whileHover={{ 
                scale: show.isCenter ? 1.02 : 0.85,
                transition: { duration: 0.2 }
              }}
              onClick={() => {
                if (show.position !== 0) {
                  handleCardClick(show.position, show.id, currentIndex);
                }
              }}
            >
              <MainProduct
                uuid={show.id}
                index={currentIndex}
                title={show.title}
                posterUrl={show.posterUrl}
                featured={show.isCenter}
                disableLink={!show.isCenter}
                location={show.location}
                performStartDate={show.performStartDate}
                performEndDate={show.performEndDate}
              />
            </CardWrapper>
          ))}
        </AnimatePresence>
      </CarouselWrapper>
      <NavigationButton className="next" onClick={handleNext}>
        →
      </NavigationButton>
    </CarouselContainer>
  );
};

export default FeaturedCarousel; 