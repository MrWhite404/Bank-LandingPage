import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap lg:mt-[-58px] mt-4 `}>
    {stats.map((stat, index) => (
      <div id={stat.id} className={` flext-1 justify-start flex-wrap flex items-center flex-row ${index == 0 ? "lg:ml-0" : "lg:ml-28"} `}>
        <h4 className='font-poppins font-smibold xs:text-[40px] text-[30px] xl:leading-[53px] leading-[40px] text-white'>
          {stat.value}
        </h4>
        <p className='font-poppins font-normal xs:text-[20] text-[15px] xl:leading-[26px] leading-[20px] text-gradient uppercase ml-3'>
          {stat.title}
        </p>
      </div>
    ))}
  </section>
)


export default Stats