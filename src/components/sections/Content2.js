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

const Content2 = ({
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
    title: 'Part 2 ',
    paragraph: 'Examples of Spirit Possession as Emotional Outlet',
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
              In Somaliland, there are multiple contexts under which men
              generally become possessed. There are three main reasons men
              become possessed: <br />
              <br />
              (1) he can become possessed by a woman after rejecting her <br />
              <br />
              (2) by a woman he wants to marry but cannot, or <br />
              <br />
              (3) he can become possessed during times when he is dealing with
              stress or personal issues. <br /> <br /> <br />
              Each of these possessions are triggered by the inability of the
              man to express his emotions in a healthy way due to societal
              expectations and norms.
            </p>
            <p style={{ textIndent: '3em' }}></p>
            <p></p>
            <img src={fuckingimage} alt='BookImageJaniceBoddy' />
            While most of Janice Boddy’s work is oriented within spirit
            possession, in Wombs and Alien Spirits she admits that her research
            only partially delves into the masculine side of spirit possession.
            Here is a part of her research that does dive into the masculine
            side of the Zar cults:
            <div className='tiles-item-inner' data-reveal-delay='200'>
              <p className='text-sm mb-0'>
                "Just after his wife announces her pregnancy, ‘Umer falls ill.
                That the revelation provokes both stress and joy can be
                imagined, for it heralds his imminent return to Hofriyat and
                resumption of tenant farming. Consider ‘Umer’s position: he is
                without resources of his own, forced to rely on those of his
                wife through his wife’s mother. The ideal and honorable
                masculine practice is thereby reversed, and unless he emigrates
                or finds another line of work, ‘Umer will be unable to fulfill
                the social expectations of his sex”
              </p>
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
            <br />
            <p>
              <p style={{ textIndent: '3em' }}>
                His diagnosis is self and spirit made. He immediately goes to
                find a curer familiar with this zar that is afflicting him. In
                order for his affliction to be seen as valid, the curer in
                Kabushiya must validate it otherwise within the masculine social
                dynamic he will be seen as lying, and weak. It would damage his
                masculine image to be rebuked by the curer, a wise man who has
                the knowledge of many different spirits. It is common in the
                Hofryati village for a zar spirit to possess a man at a crucial
                time in his life. One in which he is in danger of losing his
                public image. It then goes to provide a lifelong benefit, as a
                zar can be drawn on for strength later.
              </p>
              <p style={{ textIndent: '3em' }}>
                ‘Umar in this context gains a controlled relationship with his
                zar after it’s confirmed by the curer. ‘Umar cannot show
                distress at his situation. It violates the masculine norms of
                the area and places him in a position of being less than the
                ideal masculine image. As a direct result the Zar possesses him
                creating an avenue to express his myriad of emotions. When ‘Umar
                goes to the curer to not only have his possession validated but
                to find the name of his Zar, then he is accepted within the
                masculine sphere, and can draw upon his relationship with his
                Zar for strength in the future.
              </p>
              <p style={{ textIndent: '3em' }}>
                Whereas women’s experiences in Hofryati are more dependent on
                spirit possession as a continuous reinforcement in a societal
                role that is lesser to men, the male experience of spirit
                possession is not to be drawn upon regularly. It is an
                occurrence that happens very few times in their life, usually in
                times of intensity and faltering within their masculine role.
              </p>
            </p>
            ------------------------
          </div>
        </div>
      </div>
    </section>
  );
};

Content2.propTypes = propTypes;
Content2.defaultProps = defaultProps;

export default Content2;
