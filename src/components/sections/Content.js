import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

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
    title: 'A Brief Overview: ',
    paragraph: 'Reli 427 with Brandon Thornton',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <p>
              In the duration of our class, we’ve learned that spirit possession
              is a gendered subject that mainly focuses on women as
              victims/facilitators of spirit possession. Women tend to use
              spirit possession as an outlet the feelings and frustrations they
              experience that are taboo to speak about publicly. On the flip
              side, men experience spirit possession for a different reason. Men
              are generally the ones in power in most societies, so they do not
              have the same feeling of powerlessness that women do.
              <br />
              However, there are some aspects of mens’ lives in which they may
              feel powerless. For example, societies such as these have very
              specific expectations of male and female behavior that everyone is
              expected to adhere to. For men, many societies deem it to be taboo
              to show a more sensitive side, and men are expected to always act
              masculine, strong, and lacking “feminine” emotions.
              <br />
              In reality, men are of course going to have these emotions
              regardless of society’s expectations. Not being able to speak
              openly about these frustrations, men utilize spirit possession in
              a similar way as women, both to deflect from themselves and to
              have a means to express their suppressed emotions.
            </p>
            <span>
            While most of Janice Boddy’s work is oriented within spirit possession, in Wombs and Alien Spirits she admits that her research only partially delves into the masculine side of spirit possession.  

            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <p className='text-sm mb-0'>
                    "Just after his wife announces her pregnancy, ‘Umer falls
                    ill. That the revelation provokes both stress and joy can be
                    imagined, for it heralds his imminent return to Hofriyat and
                    resumption of tenant farming.” “Consider ‘Umer’s position:
                    he is without resources of his own, forced to rely on those
                    of his wife through his wife’s mother. The ideal and
                    honorable masculine practice is thereby reversed, and unless
                    he emigrates or finds another line of work, ‘Umer will be
                    unable to fulfill the social expectations of his sex”
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    Janice Boddy
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>
                      Wombs and Alien Spirits: Women, Men, and the Zar Cult in
                      Northern Sudan
                    </a>
                  </span>
                </div>
              </div>
            </div>



            </span>
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <p className='text-sm mb-0'>--FAT JUICY FUCKING QUOTE</p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    Name of Author/Quotor
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>Source Text</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <p className='text-sm mb-0'>--FAT JUICY FUCKING QUOTE</p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    Name of Author/Quotor
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>Source Text</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
