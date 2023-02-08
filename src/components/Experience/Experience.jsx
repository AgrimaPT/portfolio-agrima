import React from 'react'
import './Experience.css'
import {MdCastForEducation} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import {AiOutlineProject} from 'react-icons/ai'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Experience = () => {
  return (
    <section id="experience">
      <h5>My Formal Bio Details</h5>
      <h2>Resume</h2>

      <Swiper className='container resume__container'
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}      
       pagination={{ clickable: true }}>
        <SwiperSlide className='resume '>
          <MdCastForEducation className='about__icon'/>
          <h5 className='hp'>Education</h5>
          <dl className='edu'>
            <dt>A.P.J.Abdulkalam technological university :</dt>
            <dd>Computer Science Engineering</dd>
            <dt>Higher Secondary :</dt>
            <dd>Easthill Higher Secondary School </dd>
            <dt>High School :</dt>
            <dd>St.Michael's Girls High School</dd>
          </dl>
        </SwiperSlide>

        <SwiperSlide className='resume'>
          <GiSkills className='about__icon'/>
          <h5 className='hp'>Programming Skills</h5>
          <div className='skills'>
            <div className='front'>
              <h5 className='hp'>Frontend Development</h5>
                <ul className='skill__list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                </ul>
            </div>
            <div className='back'>
              <h5 className='hp'>Backend Development</h5>
              <ul className='skill__list'>
                <li>Python</li>
                <li>C</li>
                <li>PHP</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='resume '>
          <AiOutlineProject className='about__icon'/>
          <h5 className='hp'>Projects</h5>
          <ul className='pro'>
            <li>Personal Portfolio Website</li>
            <li>ToDo App</li>
            <li>Snake Game</li>
            <li>Tic Tac Toe Game</li>
          </ul>         
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Experience

