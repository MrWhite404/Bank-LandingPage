import React from 'react';
import {features} from '../constants';
import styles,{ layout } from '../style';
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row rounded=[20px]  ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card p-4`}>
    <div className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img 
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex flex-1 flex-col ml-3'>
      <h4 className=' font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className=' font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id='features' className={`${layout.section} mt-8`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the Business, <br className='sm:block hidden'/> 
        We'll handle the money
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your finacial life by building credit, earning credit and saving money. But with hundread of credit cards on the market.
      </p>
      <Button styles = 'mt-10' />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard 
          key = {feature.id}
          {...feature}
          index = {index}
        />
      ))}
    </div>
  </section>
)

export default Business