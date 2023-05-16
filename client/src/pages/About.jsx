
import React, { useRef, useEffect } from 'react';
import '../components/about.scss';
import person1 from "../static/person1.jpg";
import person2 from "../static/person2.jpg";
import person3 from "../static/person3.jpg";
import person4 from "../static/person4.jpg";
import person5 from "../static/person5.jpg";
import person6 from "../static/person6.jpg";
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";



gsap.registerPlugin(Flip);

const people = [
  { id: 1,  image: person1 },
  { id: 2,  image: person2 },
  { id: 3,  image: person3 },
  { id: 4,  image: person4 },
  { id: 5,  image: person5 },
  { id: 6,  image: person6 },
];

const About = () => {
  const galleryRef = useRef(null);
  const bigHumanRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const humans = gallery.querySelectorAll('figure');

    const changeGrid = (human) => {
      if (human === bigHumanRef.current) return;

      const state = Flip.getState(humans);

      bigHumanRef.current.dataset.grid = human.dataset.grid;
      human.dataset.grid = 'img-1';
      bigHumanRef.current = human;

      Flip.from(state, {
        absolute: true,
        ease: 'Power1.inOut',
      });

      // Update the popup content



    };

    humans.forEach((human) => {
      human.addEventListener('click', (e) => changeGrid(human));
    });

    bigHumanRef.current = humans[0];

    return () => {
      humans.forEach((human) => {
        human.removeEventListener('click', (e) => changeGrid(human));
      });
    };
  }, []);


  
  return (
    <div className='about'>
      
      <h1 className="h1-love">We ❤️ What We do</h1>
      <div className="gallery" ref={galleryRef}>
        {people.map((person) => (
          <figure data-grid={`img-${person.id}`} key={person.id}>
            <img src={person.image} alt="" />
          </figure>
        ))}
      </div>
      <div className="popup" ref={popupRef}>
      </div>  
    </div>

  );
};

export default About;



