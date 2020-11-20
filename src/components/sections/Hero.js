import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import FeaturesTiles from './FeaturesTiles';
import FeaturesSplit from './FeaturesSplit';
import Testimonial from './Testimonial';
import Cta from './Cta';
import Content from './Content';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [getSetting, setSetting] = useState(0);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content'>
            <h1
              className='mt-0 mb-16 reveal-from-bottom'
              data-reveal-delay='200'
            >
              <span className='text-color-primary'>
                Expression and Possession
              </span>
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                A glimpse into the masculine power dynamic of spirit possession
                and expression{' '}
              </p>
              <div className='reveal-from-bottom' data-reveal-delay='600'>
                
                
                <ButtonGroup>
                  <Button tag='a' color='primary'onClick={()=> setSetting(1)} wideMobile>
                    William "Alan" Patterson II
                  </Button>
                  <Button tag='a' color='primary'onClick={()=> setSetting(2)} wideMobile>
                    Sara Mosby
                  </Button>
                 
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className='hero-figure reveal-from-bottom illustration-element-01'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <p>Self Possession In Thailand</p>
            <a
              data-video='https://www.youtube.com/watch?v=D9Tki660vGU'
              href='#0'
              aria-controls='video-modal'
              onClick={openModal}
            >
              <p></p>
              <iframe
                width='660'
                height='415'
                src='https://www.youtube.com/embed/D9Tki660vGU'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </a>
          </div>
          <Modal
            id='video-modal'
            show={videoModalActive}
            handleClose={closeModal}
            video='https://www.youtube.com/watch?v=D9Tki660vGU'
            videoTag='iframe'
          />
          <br />
          <p>
            The men showcased in this short documentary practice self-possession
            as a way to protect the rest of their community from harm. A
            nine-day festival is celebrated each year, where participants adopt
            a vegetarian diet to cleanse their bodies and spirits. This practice
            is attractive to people who have experienced serious illness, as the
            rituals are meant to ensure health and safety for the year to come.
            Men like the ones shown in the video are chosen by the gods to be
            spirit mediums. These mediums become possessed during the festival
            and practice self-mutilation, which is meant to ensure that other
            people in their community will not be harmed.{' '}
          </p>
         
        </div>
      </div>
  
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
