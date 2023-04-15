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


const About = () => {
  const humans = useRef<HTMLDivElement[]>([]);
  const bigHuman = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Flip);

    humans.current = Array.from(document.querySelectorAll('.gallery figure'));

    humans.current.forEach((human) => {
      human.addEventListener('click', () => changeGrid(human))
    });

    return () => {
      humans.current.forEach((human) => {
        human.removeEventListener('click', () => changeGrid(human))
      });
    }
  }, []);

  function changeGrid(human: HTMLDivElement) {
    if(human === bigHuman.current) return;

    const state = Flip.getState(humans.current);

    bigHuman.current?.setAttribute('data-grid', human.getAttribute('data-grid') ?? '');
    human.setAttribute('data-grid', 'img-1');
    bigHuman.current = human;

    Flip.from(state, {
      absolute: true,
      ease: 'power1.inOut'
    });
  }

  return (
    <div>
      <h1 className='h1-love'>We ❤️ What We do</h1>
      <div className='gallery'>
        <figure data-grid="img-1" ref={(el) => bigHuman.current = el ?? null}>
          <img src={person1} alt= "" />
        </figure>
        <figure data-grid="img-2" ref={(el) => humans.current[1] = el ?? null}>
          <img src={person2} alt= "" />
        </figure>
        <figure data-grid="img-3" ref={(el) => humans.current[2] = el ?? null}>
          <img src={person3} alt= "" />
        </figure>
        <figure data-grid="img-4" ref={(el) => humans.current[3] = el ?? null}>
          <img src={person4} alt= "" />
        </figure>
        <figure data-grid="img-5" ref={(el) => humans.current[4] = el ?? null}>
          <img src={person5} alt= "" />
        </figure>
        <figure data-grid="img-6" ref={(el) => humans.current[5] = el ?? null}>
          <img src={person6} alt= "" />
        </figure>
      </div>
    </div>
  );
};

export default About;
