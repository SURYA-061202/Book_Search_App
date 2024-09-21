import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your books!!</h2><br />
                <p className='header-text fs-18 fw-3'>Instruments that record, analyse
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
                                                      SOMETIMES TOUCH!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header