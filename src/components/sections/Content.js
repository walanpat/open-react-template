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

const Content = ({
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
    title: 'Introduction: ',
    paragraph: 'Societal Pressures on Men',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <span className='text-color-primary'>
            <SectionHeader data={sectionHeader} className='center-content' />
          </span>
          <div className={tilesClasses}>
            <div className='tiles-item-inner'>
              <div className='testimonial-item-content'>
                <p className='text-sm mb-0'>
                  “Toxic masculinity involves the need to aggressively compete
                  and dominate others and encompasses the most problematic
                  proclivities in men. These same male proclivities foster
                  resistance to psychotherapy.”
                </p>
              </div>
              <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                <span className='testimonial-item-name text-color-high'>
                  William Ming Liu
                </span>
                <span className='text-color-low'> / </span>
                <span className='testimonial-item-link'>
                  <a href='#0'>
                    {' '}
                    "The Study Of Men And Masculinity As An Important
                    Multicultural Competency Consideration". Journal Of Clinical
                    Psychology, 2005, doi:10.1002/jclp.20103. Accessed 20 Nov
                    2020.
                  </a>
                </span>
              </div>
            </div>
            <br />
            <p style={{ textIndent: '3em' }}>
              In most societies, the gender dynamic is such that men are in
              power and women are subordinate. It is not a perfect rule, because
              in many societies women are in positions of power and have
              influence. However, these women often face more obstacles and
              difficulties getting to a position of power than do men. Most
              research focuses on power dynamics in regards to how women are
              suppressed in these societies. However, there are negative
              psychological effects that this gender dynamic has on men too.
            </p>
            <p style={{ textIndent: '3em' }}>
              We have seen countless times how women cope with the stressors of
              these norms by becoming possessed as a form of protest. What gets
              largely ignored in most research is the effect it has on men. Men
              are expected from when they learn to talk to be a strong person
              and leader. This is not necessarily a negative thing. However,
              when accompanied by expectations of the suppression of “feminine”
              emotions, such as sadness and fear, these norms can be detrimental
              to male mental health. Toxic masculinity emerges, preventing men
              from showing any form of weakness and creating a barrier to mental
              health treatment.
            </p>
            <p>
              The way that toxic masculinity works is that men become overly
              competitive with each other, feeling the need to prove themselves
              and their superiority. In this environment, there is no room for
              men to express feelings of sadness, worry, or confusion. Instead,
              they must act like they are always in control, both over
              themselves and their circumstances, even if they are not. This can
              lead to decades of suppressed emotion, causing frustration in men.
              As a way to combat this while still operating within the norms of
              society, men in some cultures use spirit possession as an
              emotional outlet, blaming their taboo emotional behavior on the
              spirit they are possessed by. Men in other cultures may also use
              spirit possession to seek out ways that they can be allowed to
              take on a position of powerlessness, relieving them of the burden
              of being in constant control.
            </p>
            ------------------------
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
