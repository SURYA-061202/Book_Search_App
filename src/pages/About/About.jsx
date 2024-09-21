import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>The purpose of this app is make ease of searching books in the internet. You can find your amazing books here.</p><br /><br /><br />
            <p className='fs-17'>If you dont know the definition for book, here its definition!!</p><br /><br /><br />
            <p className='fs-17'>Instruments that record, analyse
                                Summarize, organize, debate and
                                Explain informations that are
                                Illustrated, non illustrated
                                Hardbone paperback
                                jacketed, non jacketed
                                With forward introduction
                                Table of contents, index
                                That are intended for the
                                Enlightment, understanding,
                                Enrichment, enhancement and
                                The education of the human brain
                                For the sensory route of vision
                                SOMETIMES TOUCH</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
