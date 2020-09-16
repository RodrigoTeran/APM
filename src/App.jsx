import React, { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Post from './components/Post';
import ButtonMenu from './components/Buttons/ButtonMenu';

const App = () => {
  const [start, setStart] = useState(false);
  const openBlog = () => {
    setStart(true);
  };
  const closeBlog = () => {
    setStart(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  });
  const getTop = (component) => {	// Función que calcula la distancia que existe de un componente y hasta arriba de la página
    return (parseInt(document.querySelector(component).getBoundingClientRect().top + document.scrollingElement.scrollTop));
  };
  const [fixedCol, setFixedCol] = useState(false);
  const handleScroll = () => {
    if (fixedCol) {
      if (document.scrollingElement.scrollTop <= 252) {
        setFixedCol(false);
      };
    } else {
      // 171
      if (getTop('.col-header-2') < document.scrollingElement.scrollTop + 50) {
        setFixedCol(true);
      };
    };
  };
  const putScroll = (component) => {
    window.scroll({ top: getTop(component) - 100, left: 0, behavior: 'smooth' });
  }
  return (
    <div>
      <Header openBlog={openBlog}></Header>
      {start ? (
        <>
          {document.body.style.overflow = "visible"}
        </>
      ) : (
          <>
            {document.body.style.overflow = "hidden"}
          </>
        )}
      <div className={`${start ? ('open') : ('closed')} blog`}>
        <div className='arrow' onClick={closeBlog}>
          <svg width='20px' height='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" /></svg>
        </div>
        <div className='rodrigo'>
          RODRIGO TERÁN HERNÁNDEZ
        </div>
        <div className='menu row justify-content-center align-items-center'>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-1') }} text='MEANING OF MY NAME'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-2') }} text='SELFIE AND IDENTITY'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-3') }} text='IDENTITY AND CHOICES'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-4') }} text='I AM MOVIE REFLECTION '></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-5') }} text='CULTURAL CHELLENGES'></ButtonMenu>
        </div>
        <div className='row row-header'>
          <div className="col-lg-7 col-md-12 col-sm-12 col-header col-header-1">
            <Post
              date='15/09/2020'
              title='THE MEANING OF MY NAME'
              img='img-post-1'
            >
              <div className='title-des-special'>
                I WAS GIVEN MY NAME BECAUSE  . . .
              </div>
              <div className='title-des' style={{ marginBottom: '20px' }}>
                My name was never to hard to decide for my parents. They always knew that they wanted to have a boy named Rodrigo
              </div>
              <img src="Images/meaning.jpg" className='img-post' alt="Img Post" />
              <div className='title-des-special'>
                I LIKE MY NAME BECAUSE . . .
              </div>
              <div className='title-des'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in?
              </div>
              {/*
                <div className='title-des-special'>
                  MY NAME IS A GOOD FIT FOR MY PERSONALITY BECAUSE ...
                </div>
                <div className='title-des' style={{ marginBottom: '10px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in?
                </div>
                <div className='title-des-special'>
                  WHEN SOMEONE MAKES AN ASSUMPTION . . .
                </div>
                <div className='title-des' style={{ marginBottom: '10px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in?
                </div>
                <div className='title-des-special'>
                  WHEN MY NAME AFFECTED ME . . .
                </div>
                <div className='title-des'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in?
                </div>
              */}
            </Post>
            <Post
              date='15/09/2020'
              title='Selfie and Identity'
              img='img-post-2'
            >
              <div className='title-des-special'>
                THIS IS ME IN A PICTURE
              </div>
              <div className='title-des'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in?
              </div>
            </Post>
            <Post
              date='16/09/2020'
              title='Identity and choices'
              img='img-post-3'
            >
              <div className='title-des-special'>
                MY SCHOOL-DAY MORNING ROUTINE
              </div>
              <div className='title-des'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in?
              </div>
            </Post>
            <Post
              date='16/09/2020'
              title='I am Movie Reflection'
              img='img-post-4'
            >
              <div className='title-des-special'>
                WHATS WRONG WITH THE WORLD? . . .
              </div>
              <div className='title-des'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in?
              </div>
            </Post>
            <Post
              date='16/09/2020'
              title='Cultural Challenges Reflection'
              img='img-post-5'
            >
              <div className='title-des-special'>
                WHAT CULTURAL CHELLENGES I HAVE EXPERIENCED? . . .
              </div>
              <div className='title-des'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in?
              </div>
            </Post>
          </div>
          <div className={`col-lg-5 col-md-12 col-sm-12 col-header col-header-2 ${fixedCol ? ("fixed") : ("")}`}>
            <div className='about-me'>About Me</div>
            <div>
              <img src="Images/fotomia.png" alt="Rodrigo" className='fotomia' />
            </div>
            <div className='fotomia-des'>
              <div style={{ textAlign: 'center' }}>
                Hello, welcome to my blog
              </div>
              <div style={{ textAlign: 'center' }}>
                Im Rodrigo Teran
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <div className="nav-top-menu-bar-icons-button" style={{ width: "40px", height: "40px", cursor: "pointer" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                </div>
                <div className="nav-top-menu-bar-icons-button" style={{ width: "40px", height: "40px", cursor: "pointer" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                </div>
                <div className="nav-top-menu-bar-icons-button" style={{ width: "40px", height: "40px", cursor: "pointer" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
