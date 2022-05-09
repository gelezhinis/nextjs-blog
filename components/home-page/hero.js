import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/me.jpg" alt="An image showing me" width={200} height={200} />
      </div>
      <h1>
        Hi, I'm Linas!
      </h1>
      <p>
        I blog about progressive rock/metal - especially about prog-rock legends. 
      </p>
    </section>
  );
}

export default Hero;