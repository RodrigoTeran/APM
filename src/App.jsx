import React, { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Post from './components/Post';
import ButtonMenu from './components/Buttons/ButtonMenu';
import CardRoutine from './components/CardRoutine';

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
        <div className='menu row justify-content-center align-items-center'
          style={{ width: "90%" }}>
          <ButtonMenu newPost={true} clickFunction={() => { putScroll('.img-post-11') }} text='FINAL REFLECTION'></ButtonMenu>
          <ButtonMenu newPost={true} clickFunction={() => { putScroll('.img-post-10') }} text='FINAL ANALYSIS'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-9') }} text='CLASS REFLECTION'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-8') }} text='CULTURAL NARRATIVES'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-7') }} text='MULTICULTURALISM'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-6') }} text='BECOMING AN ACTOR'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-1') }} text='MEANING OF MY NAME'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-2') }} text='SELFIE AND IDENTITY'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-3') }} text='IDENTITY AND CHOICES'></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-4') }} text='I AM MOVIE REFLECTION '></ButtonMenu>
          <ButtonMenu clickFunction={() => { putScroll('.img-post-5') }} text='CULTURAL CHALLENGES'></ButtonMenu>
        </div>
        <div className='row row-header'>
          <div className="col-lg-7 col-md-12 col-sm-12 col-header col-header-1">
            <Post
              date='18/11/2020'
              title='FINAL REFLECTION'
              img='img-post-11'
            >
              <div className='title-des-special'>
                bla bla bla
              </div>
              <div className='title-des' style={{ marginBottom: '30px' }}>
                bla bla bla
              </div>
            </Post>
            <Post
              date='18/11/2020'
              title='MULTICULTURALISM AND HUMAN RIGHTS'
              img='img-post-10'
            >
              <div className='title-des-special'>
                What is my idea about multiculturalism and human rights?
              </div>
              <div className='title-des' style={{ marginBottom: '30px' }}>
                bla bla bla
              </div>
            </Post>
            <Post
              date='28/10/2020'
              title='CLASS REFLECTION'
              img='img-post-9'
            >
              <div className='title-des-special'>
                This is a reflection of what I learned in class
              </div>
              <div className='title-des' style={{ marginBottom: '30px' }}>
                What I most like about the Multicultural Agents and Perspetcives class is that now I feel
                more multicultural aware...
                <br />
                We work in an important proyect. This project was about to exchange perspectives and expand our global competence.
                We decied to Interview two girls about the problem of gender inequality.
              </div>
              <div className='title-des-special'>
                Ellie, she is from Singapore:
              </div>
              <img src="Images/ellie.png" className='img-post' alt="Img Post" />
              <div className='title-des-special'>
                And Isabela, she is from Brazil:
              </div>
              <img src="Images/isabelita.png" className='img-post' alt="Img Post" />

              <div className='title-des' style={{ marginBottom: '30px', marginTop: "30px" }}>
                It was important two have two different perspectives in this interview, so thats why the two girls
                are from different places
                <br />
                Ellie has work in an organization calles days for girls.
              </div>
              <div className='title-des-special'>
                DAYS FOR GIRLS:
              </div>
              <img src="Images/days.jpg" className='img-post' alt="Img Post" />

              <div className='title-des' style={{ marginBottom: '30px', marginTop: "30px" }}>
                And Isabela is a close friend of me. I know that Isabela is so aware of this challenges,
                so I decided her.
                <br />
                This was what I created of my own research of this problem
              </div>

              <div className='title-des-special'>
                DIAGRAM:
              </div>
              <img src="Images/venn.png" className='img-post' alt="Img Post" />

              <div className='title-des-special' style={{ marginTop: "30px" }}>
                Conclusion
              </div>
              <div className='title-des' style={{ marginBottom: '30px' }}>
                Before doing this activity, I did not have a clear idea how this problem affects the world. How this problem affects the daily life of some girls in different cultures, with different perspectives. I did not have a clear whole observation. So, this activity filled that blank part that I had.
                Now I have so much knowledge about this problem in some cultures. I know can develop an own idea of this challenge. I can develop some theories. And I can make a change because that is the main purpose.
                The purpose was to exchange perspectives, to empathize and develop that multiculturalism. I developed that with this activity.
                <br />
                I really loved this class because it changes the way I approach challenges.
              </div>
              <img src="Images/faces.png" className='img-post' alt="Img Post" style={{ marginBottom: "80px" }} />
            </Post>
            <Post
              date='27/10/2020'
              title='CULTURAL NARRATIVES'
              img='img-post-8'
            >
              <div className='title-des-special'>
                The way culture shapes society and society shapes culture
              </div>
              <div className='title-des' style={{ marginBottom: '30px' }}>
                Everything we do is based in our decisions, and our decisions are based from our culture.
                <br />
                This is true because we think we have the freedom to choose. That is a lie. Our decisions
                are based from our culture, the way we speak, our religion, even our language, because it is the way
                we feel and interact with the rest of the world.
              </div>
              <img src="Images/des1.jpg" className='img-post' alt="Img Post" />
              <div className='title-des' style={{ marginBottom: '30px', marginTop: "30px" }}>
                So, our decisions are shaped from our culture.
                And our decisions shape society.
                <br />
                The society is based on people, a large quantity of people that have the same language,
                traditions, ethincity, etc. that same way of thinking is a culture...
              </div>
              <img src="Images/des2.jpg" className='img-post' alt="Img Post" />
              <div className='title-des' style={{ marginBottom: '80px', marginTop: "30px" }}>
                So, this is a cycle. Everybody, as an individual shape society. And society also contributes to our decisions.
              </div>
            </Post>
            <Post
              date='27/10/2020'
              title='MULTICULTURALISM'
              img='img-post-7'
            >
              <div className='title-des-special'>
                Multiculturalism and identity
              </div>
              <div className='title-des' style={{ marginBottom: '30px' }}>
                This is a phrase that I wanto to reflect on:
                <br />
                "Things are only pure if you look at them from afar. It is very important to know our roots, to know where we come from, to know our history, but at the same time, as important as knowing where we are from is to understand that everyone, deep down, we are from nowhere at all and from all sides a bit "(Drexler, 2017).
              </div>
              <img src="Images/music.jpg" className='img-post' alt="Img Post" />
              <div className='title-des' style={{ marginBottom: '10px', marginTop: "30px" }}>
                Cultural identity might be seen like something special and unique but...
              </div>
              <div className='title-des-special'>
                We all are part of the same root
              </div>
              <div className='title-des' style={{ marginBottom: '80px' }}>
                The human history is a vast and rich elements of combination of cultures. There is no human being in the planet that has 100% the characterstics
                of a single culture. We need to recognize our own history. We all come from one place, Africa. We are the product of many cultures.
                The ideas that of many cultures. The intelligence of tribes. The knowledge of societies. The power of nations. The idea of religion of many movements.
                <br />
                We are one single part of something bigger. But together we make our own history.
              </div>
            </Post>
            <Post
              date='27/10/2020'
              title='BECOMING AN ACTOR'
              img='img-post-6'
            >
              <div className='title-des-special'>
                Life is not reduced to a single activity
              </div>
              <div className='title-des' style={{ marginBottom: '30px' }}>
                Life is to short to just doing only one single thing...
                <br></br>
                Thats why the meaning of life is doing what makes you happy. When you grow up you interests change. You can explore many areas of interest.
                <br />
                People that now what they are doing are the ones that really have a long and meaningful life. The ones that now what are their passions.
                People like that are called "visionaries". People that now why they are here in the world. They have a "vision"
              </div>
              <img src="Images/life.jpg" className='img-post' alt="Img Post" />
              <div className='title-des' style={{ marginBottom: '10px', marginTop: "30px" }}>
                So life is just not resumed in only one activty... Life is resumed in happinees and goals.
              </div>
              <div className='title-des-special'>
                Do what you know and do it the best you can
              </div>
              <div className='title-des' style={{ marginBottom: '10px' }}>
                When you do the activity which you are the best, people are going to admire you. You are going to have a meaninful life.
                This is not about being rich, this is about making history.
                This is a way to contribute to society.
                <br />
                For example, Bill Gates... when he was not stil one of the richest man on earth, his passion was computers, not money.
                You needto contribute to society, as you wish... creating a song, writing a book, donate to poor people.
                Do what fills up your hearth with joy.
              </div>
              <div className='title-des-special'>
                Cultural expressions
              </div>
              <div className='title-des' style={{ marginBottom: '80px' }}>
                Cultural expressions like theater, music, books, poems, etc. Are a key factor of society. They help to raise awareness.
                Because sometimes a person doesnt realize what is happening in the society he is living, so the cultural expressions
                are so important, to empower people, to maje concience of our reality.
              </div>
            </Post>
            <Post
              date='15/09/2020'
              title='THE MEANING OF MY NAME'
              img='img-post-1'
            >
              <div className='title-des-special'>
                I WAS GIVEN MY NAME BECAUSE  . . .
              </div>
              <div className='title-des' style={{ marginBottom: '20px' }}>
                My name was never to hard to decide for my parents. They always knew that they wanted to have a boy named Rodrigo.
                They always had like that name.
                My name means "fame, glory and reiks. Mighty, rich"
              </div>
              <img src="Images/rodrigo.jpg" className='img-post' alt="Img Post" />
              <div className='title-des-special'>
                I LIKE MY NAME BECAUSE . . .
              </div>
              <div className='title-des' style={{ marginBottom: '20px' }}>
                My name is not that long, but also is not super short.
                I really like my name because it sounds discrete, but also realistic.
                I think it is an original name.
              </div>
              <img src="Images/meaning.jpg" className='img-post' alt="Img Post" />
              <div className='title-des-special'>
                MY NAME IS A GOOD FIT FOR MY PERSONALITY BECAUSE ...
                </div>
              <div className='title-des' style={{ marginBottom: '20px' }}>
                I dont think my name is totally opposite of my personality but also not as the way I am.
                Sometimes I dont know if this is the way a Rodrigo should be/act. But there are situations where I think it fits really well
                my personality.
              </div>
              <img src="Images/person.jpg" className='img-post' alt="Img Post" />
              <div className='title-des' style={{ marginBottom: '10px', marginTop: '20px' }}>
                Rodrigo fits my creativity, logic and originality. I dont like to be super showy, but also not too much discrete.
              </div>
              <div className='title-des-special'>
                WHEN SOMEONE MAKES AN ASSUMPTION . . .
              </div>
              <div className='title-des' style={{ marginBottom: '20px' }}>
                When someone makes an assumption of my personality based on my name it is very usual that they are right.
                There are people that had told me that because they heard thay I was named Rodrigo, they started to talk to me.
                They said that Rodrigo sounds like a very friendly name.
              </div>
              <img src="Images/friends.png" className='img-post' alt="Img Post" style={{ width: '100%' }} />
              <div className='title-des' style={{ marginBottom: '10px', marginTop: '20px' }}>
                A friend that I had when I swam in a team told me that for him the people named Rodrigo were super
                kind and friendly.
                We were so good friends.
              </div>
              <div className='title-des-special'>
                WHEN MY NAME AFFECTED ME . . .
              </div>
              <div className='title-des' style={{ marginBottom: "30px" }}>
                I dont remember that my name had affected me. But that does not means that it has not already done it.
                Maybe like my friend in the swimming team, but in an opposite situation.
              </div>
              <img src="Images/perder.png" className='img-post' alt="Img Post" />
              <div className='title-des' style={{ marginTop: '30px' }}>
                What if I hadn't met someone really friendly because they think that Rodrigo's are aggressive and unfriendly?
              </div>
            </Post>
            <Post
              date='15/09/2020'
              title='Selfie and Identity'
              img='img-post-2'
            >
              <div className='title-des-special'>
                THIS IS ME IN A PICTURE
              </div>
              <div className='title-des' style={{ marginBottom: "0px" }}>
                This selfie represents all what I am:
                <ul>
                  <li>
                    My Identity
                  </li>
                  <li>
                    My gender
                  </li>
                  <li>
                    My religion
                  </li>
                  <li>
                    My name
                  </li>
                  <li>
                    Me and the others.
                  </li>
                  <li>
                    My choices
                  </li>
                  <li>
                    What I LIKE
                  </li>
                </ul>
              </div>
              <div className='title-des' style={{ marginTop: "20px" }}>
                This selfie represents all what I am:
                <ul>
                  <li>
                    The computer represents my love for technology.
                  </li>
                  <li>
                    The books represent my love for studying and reading.
                  </li>
                  <li>
                    The light bulb represents that I like to generate ideas and I am an entrepreneur.
                  </li>
                  <li>
                    The Boxing gloves represent my love for martial arts and sports.
                  </li>
                </ul>
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
              <div className='title-des' style={{ marginBottom: '10px' }}>
                I am going to evaluate my daily choices and how people affected
                them...
                <br />
                Scale:
                <br />
                <ul>
                  <li>
                    1 = choice based solely on personal desires and wishes
                  </li>
                  <li>
                    10 = choice based entirely on what other people thin
                  </li>
                </ul>
                <br />
                This is my morning routine:
                (COVID-19 edition)
                <div className='row justify-content-left align-items-center d-flex' style={{ marginTop: "40px" }}>
                  <CardRoutine time='6:50' text='I wake up' scale='1'></CardRoutine>
                  <CardRoutine time='7:00' text='I wash my face' scale='1'></CardRoutine>
                  <CardRoutine time='7:05' text='I feed up my pets' scale='3'></CardRoutine>
                  <CardRoutine time='7:15' text='I take breakfast' scale='1'></CardRoutine>
                  <CardRoutine time='7:45' text='I hear to my favorite songs' scale='1'></CardRoutine>
                  <CardRoutine time='7:55' text='I prepare to take the first class' scale='5'></CardRoutine>
                  <CardRoutine time='8:00' text='I take classes' scale='10'></CardRoutine>
                  <CardRoutine time='11:00' text='I finish the first block of classes' scale='10'></CardRoutine>
                  <CardRoutine time='11:05' text='I code my new App that uses AI' scale='1'></CardRoutine>
                  <CardRoutine time='12:00' text='I play with my pets' scale='1'></CardRoutine>
                  <CardRoutine time='12:30' text='I start the second block of classes' scale='10'></CardRoutine>
                  <CardRoutine time='3:30' text='I finish classes' scale='10'></CardRoutine>
                  <CardRoutine time='3:35' text='I eat meal with my family' scale='8'></CardRoutine>
                  <CardRoutine time='4:15' text='I start doing homework' scale='5'></CardRoutine>
                  <CardRoutine time='5:00' text='I code' scale='1'></CardRoutine>
                  <CardRoutine time='6:00' text='I do exercise' scale='1'></CardRoutine>
                  <CardRoutine time='8:00' text='I take dinner' scale='5'></CardRoutine>
                  <CardRoutine time='9:00' text='I go to my martial arts class' scale='3'></CardRoutine>
                </div>
              </div>
              <div className='title-des-special'>
                Which choices do I make in my morning routine that might affect people’s opinions of me?
              </div>
              <div className='title-des' style={{ marginBottom: "20px" }}>
                That I code a lot, and that I have a super strict time schedule.
              </div>
              <div className='title-des-special'>
                What assumptions might someone make about my identity based on these choices?
              </div>
              <div className='title-des' style={{ marginBottom: "20px" }}>
                People might think that I dont like social interaction because I code a lot. Thats far of the truth.
              </div>
              <div className='title-des-special'>
                What might happen if I made different choices one morning? How could making a different choice in my hairstyle, fashion, or another aspect of my routine affect how people look at me?
              </div>
              <div className='title-des' style={{ marginBottom: "20px" }}>
                If I stoped one day coding, my parents would believe that thier son is having trouble . . .
              </div>
              <div className='title-des-special'>
                A time in my life when I concern about how I would be perceived by others affected a decision I made
              </div>
              <div className='title-des' style={{ marginBottom: "20px" }}>
                When I was in Middle High School everyone knew I was the smartest guy in the school . . . so there were moments in which I took a decision
                based on how people are going to see my academic success. Only for that, not my opinion.
              </div>
              <div className='title-des-special'>
                Who are the people with whom I can be and show my truest self? Who am I when I am with them? In what ways do they give me confidence to just be me? . . .
              </div>
              <div className='title-des' style={{ marginBottom: "20px" }}>
                My parents are the ones in which I trust the most.
                I am super crazy when I am with them. I just can stop to talk :)
                <br />
                <br />
                They give me confidence because they know we very well . . . they are not going to judge me.
              </div>
              <div className='title-des-special'>
                What am I passionate about? How do the things I am passionate about help shape who I am?
              </div>
              <div className='title-des' style={{ marginBottom: "100px" }}>
                I am passionate about technology.
                <br />
                <br />
                I am not that stereotype of a nerd that like codign. I think my passion doesnt shape who I am.
                In this case, I am a super athletic and social guy.
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
              <div className='title-des' style={{ marginBottom: "20px" }}>
                These reflection is based on the movie "I AM":
                <br />
                At the start of the movie, I was thinking about how everything can change in just one second; all
                your life, your health, your family, everything can change. That was deep to me because I faced
                something like that. When I was younger a friend of my mother lost all his family in a car accident.
                His wife, his three sons... in just one second. I learned from that story a lot. I learned that when we
                die, we are not going to take everything we made for us. I am not going to die without doing
                something special. If I die today, “06/09/2020”, what things that I did people are going to
                remember? nothing… I am just an 18 years old boy. When I die the people are going to think, who
                was him? First, I need to ask myself, who am I?
              </div>
              <img src="Images/iam.jpg" className='img-post' alt="Img Post" style={{ width: '75%' }} />
              <div className='title-des' style={{ marginTop: "20px" }}>
                With that in mind, I reflected a lot in the question that tom asked himself at the start of
                the movie
                <div style={{ marginBottom: "20px", marginTop: '20px', color: "var(--tertiary-color-light", textAlign: "left" }}>
                  what is wrong with the world?
                </div>
                I realized that all the documentary was around of
                <div style={{ marginBottom: "20px", marginTop: '20px', color: "var(--tertiary-color-light", textAlign: "left" }}>
                  what is good with the world?
                </div>
                The world pays attention of what things you are doing and what things you are not doing,
                what are normal behaviors. That is true because we live in a society, we are part of something
                bigger. Like the ocean, the ocean is made of little drops of water. That is a culture. We are all
                connected with our conscience.
                <br />
                <br />
                Everyone is just looking for his own happiness… I thought like that before watching the
                movie, but that is not true for me anymore. We are all connected, that is our true nature. The
                nature is wise. A tree does not take all the soil for himself; it only takes what it needs. So, why are
                there humans that accumulate and accumulate wealth? The answer is because we are in an
                economy-based society. We do not respect culture as we used to do. Even though we are all
                connected. What happened to me was just like the Ted Talk “The danger of a single story”. I
                thought human nature was only war, or about thinking only of our own needs. Now, I know we are
                part of something bigger and more special.
                <br />
                <br />
                So, what does it take to change our minds? Because it helps that you can give support to a
                homeless person that is near your house. But that does not change everything. Yes, it is a good
                start point. But we are never going to change If we still think like that. I think the main question we
                need to ask ourselves is: Who am I?
                <br />
                <br />
                Like l started this essay, who am I? It is good if your meaning of life is helping people with
                cancer. It is also good if your meaning is to be an entrepreneur that has millions, but millions
                because it helps a country to develop. I think that in the movie Tom underestimate the actions of
                millionaires. One day I saw an interview to a millionaire, and they asked him: “Does money buy
                happiness?” And he answered, “Absolutely it does”. The interviewer was in shock. But then he
                said, “I run the leading company in supporting developing countries in Africa. When my partners
                show me videos of African people with books going to school thanks to my company, I cry… yes,
                money really can buy happiness”. What he said is true.
                <br />
                <br />
                I know I am a tiny part of a culture, a culture where everyone is important. I do not want
                to do only a tiny bit, if the support is equivalent to grains of sand, I would like to put a whole
                beach. To help people, to make peace, to be the change I want to see in the world. So, the most
                important question to change our lives is “Who am I?”
              </div>
            </Post>
            <Post
              date='16/09/2020'
              title='Cultural Challenges Reflection'
              img='img-post-5'
            >
              <div className='title-des-special'>
                WHAT CULTURAL CHALLENGES I HAVE EXPERIENCED? . . .
              </div>
              <div className='title-des'>
                First of all, culture has an impact in our gender, identity, values, habits, and our
                behavior. Culture is a collective attribute of a group. How they behave, what they
                think, what they like… what is good or bad…
                <br />
                <br />
                Culture is basically a way of life. So, I can see its impact everywhere, really… it
                includes beliefs, values, customs, traditions, heritage, etc.
                Basically, we react based on our culture. Our behaviors are just normal for our
                culture, nothing special. It is our way of living.
                <br />
                <br />
                The main impact is that we think to perceive our personality as unique, but it is also
                under the influence of culture. So, everybody is entangled with complex
                interactions and we will carry this influence throughout our rest of our lives.
                There is a cultural challenge that I faced. When I went to a National Swimming
                Competition when I was 15 years old.
                <br />
                <br />
                After the first day of competition, the Queretaro team was starting to do some
                cultural things in the hotel. They start to cut the hair of every new Queretaro
                competitor; I was one of them. Our coach forbade us to do that. But unfortunately,
                my friends did, so I and other newies stayed up late trying to evade the hair clipper.
                That made me unable to do well in the competition the next day.
                <br />
                <br />
                This case was more awful for another guy. Something horrible happened to him
                that I cannot tell, but that caused this kind of toxic culture to be canceled in
                competitions.
                <br />
                <br />
                This was not a very bad case for me. But this is the only thing that I faced in my
                life. I struggled with the culture of my friends for a 2-week competition, not in my
                entire life. But that was enough for me. I cannot imagine what many people need to
                face forever.
                <br />
                <br />
                There is also a cultural challenge that I faced that other people struggled because
                of me. I went to SPACEX for a robotic competition when I was just 14 years old. I
                went only with my friends, not with my parents. So, I needed to carry with myself.
                In that trip I was competing with other children around the world. Some of them
                were Indian people. The Indian people were against us in the first round.
                We needed to make a strategy to pass as many rocks as we can from place A to
                place B with a robot.
                <br />
                <br />
                The Indian people were very good, but they did not have many friends as we did.
                Because of their accent, they did not make a lot of friends. So, in the competition
                round B we needed to make teams, we had an advantage because we were
                friends of another team. The Indians had not a friend team. They were so
                disorganized, so they lost.
                <br />
                <br />
                I think this advantage we had was too low compare of another ones. But we really
                knew that the Indians were the best, and they deserved to win. But they did not win
                because of their culture, their language accent.
              </div>
            </Post>
            <Post
              date='16/09/2020'
              title='MULTICULTURAL AGENTS AND PERSPECTIVES REFLECTION'
            >
              <div className='title-des-special'>
                What I have learned?
              </div>
              <div className='title-des' style={{ marginBottom: '80px' }}>
                I am very surprised about what we have learned.
                <br />
                <br />
                Because I never asked to myself "What I am?" or "Are we human?"
                <br />
                <br />
                The classes are full with participation and I like to share my ideas.
                <br />
                <br />
                Definitely a class that today is very important to have. It is important to develop critical thinking
                and identity.
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
