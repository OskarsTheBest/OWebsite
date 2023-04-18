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
import SceneInit from '../components/lib/SceneInit';


gsap.registerPlugin(Flip);

const people = [
  { id: 1, name: 'John Doe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget gravida velit, in pretium odio. Ut sit amet enim euismod, faucibus est eget, bibendum quam. Donec eu eleifend mauris, quis pharetra lorem.', image: person1 },
  { id: 2, name: 'Jane Smith', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget gravida velit, in pretium odio. Ut sit amet enim euismod, faucibus est eget, bibendum quam. Donec eu eleifend mauris, quis pharetra lorem.', image: person2 },
  { id: 3, name: 'Bob Johnson', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget gravida velit, in pretium odio. Ut sit amet enim euismod, faucibus est eget, bibendum quam. Donec eu eleifend mauris, quis pharetra lorem.', image: person3 },
  { id: 4, name: 'Mary Williams', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget gravida velit, in pretium odio. Ut sit amet enim euismod, faucibus est eget, bibendum quam. Donec eu eleifend mauris, quis pharetra lorem.', image: person4 },
  { id: 5, name: 'Tom Brown', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget gravida velit, in pretium odio. Ut sit amet enim euismod, faucibus est eget, bibendum quam. Donec eu eleifend mauris, quis pharetra lorem.', image: person5 },
  { id: 6, name: 'Samantha Green', description: 'mutter ipsum dolor sit amet, consectetur adipiscing elit. Duis eget gravida velit, in pretium odio. Ut sit amet enim euismod, faucibus est eget, bibendum quam. Donec eu eleifend mauris, quis pharetra lorem.', image: person6 },
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
      const personId = parseInt(human.dataset.grid.replace('img-', ''));
      const selectedPerson = people.find((person) => person.id === personId);
      popupRef.current.innerHTML = `
        <h3>${selectedPerson.name}</h3>
        <p>${selectedPerson.description}</p>
      `;
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
    <div>
      <h1 className="h1-love">We ❤️ What We do</h1>
      <div className="gallery" ref={galleryRef}>
        {people.map((person) => (
          <figure data-grid={`img-${person.id}`} key={person.id}>
            <img src={person.image} alt="" />
          </figure>
        ))}
      </div>
      <div className="popup" ref={popupRef}>
        <h3>{people[0].name}</h3>
        <p>{people[0].description}</p>
      </div>
    </div>
  );
};

export default About;