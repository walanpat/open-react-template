import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import fuckingimage from './j.jpg';
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Content3 = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Part 3 ',
    paragraph: 'Spirit possession to seek out powerlessness',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <span className='text-color-primary'>
            <SectionHeader data={sectionHeader} className='center-content' />
          </span>
          <div className={tilesClasses}>
            <p style={{ textIndent: '3em' }}>
              The Thailand Vegetarian Festival as seen in the above video is an
              example of not only a lessening of power and agency but a
              sacrifice of self. This festival and means of possession is an
              interesting one. Originating from a Chinese tradition but slowly
              becoming culturally melded with Thai practices, it now exists as
              an intersectional ritual that is neither wholly Thai or Chinese.
              Male or female individuals may offer themselves up for various
              possession dances of various origins. Vietnamese, Chinese, and
              Thai dances blend across this festival creating an interesting
              blend of choreography. Go-Xeng was chosen when he had become ill
              in his youth. Go-Xeng was taken to a shrine to drive the disease
              out. Ever since then he was not only a believer, but believed
              himself to be chosen by the spirits themselves for mediumship.
            </p>
            <p style={{ textIndent: '3em' }}>
              Committing self flagellation and becoming pierced in a manner that
              pleases these spirits, not only are they driving away evil spirits
              but they are absorbing the future harm that would occur to the
              people of the festival itself. They have simultaneously lowered
              and heightened themselves to be a tool of the spirits and a ward
              against harm for the community.{' '}
            </p>
            <p></p>

        
         
            <p>
              <p style={{ textIndent: '3em' }}>
                Victims of illicit desire was about the pentacostal conversion
                process within the masculine realm. The process of a religious,
                behavioral, and cultural conversion is a difficult one that
                exacts psychological tolls on the convert. Converts see this
                manifest as spiritual assaults on their sexuality. “On the other
                hand, illicit sexual desires are of a different order of sin
                altogether and are much more difficult to manage. One need not
                do anything to have lustful and therefore illicit thoughts about
                a neighbor; simply thinking or having such thoughts is deemed
                sinful and reprehensible” It is worth noting that converts are
                not tasked with completely extinguishing sexual desire, but
                instead regulating it to their more stricter confined
                (marriage).
              </p>
                Metresa  is the name of the demonic
                temptress that assaults the sexuality of converts. She forces
                them to have sex with her. Metresa acts as a manifestation of
                these covert frustrations. Frustrations they cannot express in a
                manner that would align with their conversion and behavioral
                change. The idea of a Tiguere or macho man showing
                weakness in regard to sexuality doesn’t fit into the cultural
                gender role.
              <br />
              <br />
              <p style={{ textIndent: '3em' }}> It’s a completely unacceptable trait to have and to
                express openly. This metresa possesses the former Tiguero and
                actively takes away his sexual agency in a manner unacceptable
                to their attempts at conversion. It’s this powerlessness within
                their own sexual role that simultaneously validates their
                experience of conversion while also elevating them into the
                pentacostal role of the ‘Religious Man’.</p>
            </p>
            <br />
            <br />
            <br />
            
                
              
            
          </div>
        </div>
      </div>
    </section>
  );
};

Content3.propTypes = propTypes;
Content3.defaultProps = defaultProps;

export default Content3;
