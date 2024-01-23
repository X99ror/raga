
import React from 'react';
import styles from './home.module.css';



function Home() {
  return (
    <><div className={styles['page']}>
      
      <div className={styles['hero']}>
        <div className={styles['text']}>
          <div className={styles['title']}>Ragam ‘24 Tech-Team Inductions</div>
          <div className={styles['content']}>Embrace the challenges that lie ahead, as you become part of a community dedicated to pushing boundaries and shaping the fest.</div>
          <button className={styles['explore']}>Explore</button>
          <div className={styles['arrow']}>
            
          
            </div> 
        </div>
        <div className={styles['svg']}></div>
      </div>
      <div className={styles['center']}>
      <div className={styles['learn']}>Learn more</div>
      <div className={styles['pointer']}>
      <svg
  width="36"
  height="36"
  viewBox="0 0 36 36"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
    <rect width="36" height="36" fill="#D9D9D9" />
  </mask>
  <g mask={`url(#mask0)`}>
    <path d="M18 23.0624L9 14.0624L11.1 11.9624L18 18.8624L24.9 11.9624L27 14.0624L18 23.0624Z" fill="black" fill-opacity="0.5" />
  </g>
</svg>

      
      </div>
        
      </div> 
      <div className={styles['about']}>
        <div className={styles['left-about']}></div>
          <div className={styles['right-about']}>
            <div className={styles['head']}>About us</div>
            <div className={styles['para']}>
              <div className={styles['para1']}>The quick brown fox jumped over the lazy dog. Meanwhile, a gentle breeze rustled the leaves on the trees, creating a soothing melody. Birds chirped in the distance, adding to the natural symphony of the surroundings. As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility.</div>
              <div className={styles['para2']}>As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility. In this serene moment, one could appreciate the beauty of nature and the simplicity of life.</div>
            </div>
          </div>


      </div>
      <div className={styles['join']}>
        <div className={styles['left-side']}>
          <div className={styles['heading']}>Join us</div>
          <div className={styles['line-box']}>Embark on a journey with us and become part of a vibrant tech team, where innovation meets collaboration. Join us and contribute to something extraordinary!</div>
          <div className={styles['list-box']}>
            <ol type='1'>
              <li>Invaluable experience</li>
              <li>Work with the latest technologies and frameworks</li>
              <li>Collaborate with others</li>
              <li>Be part of the biggest cultural fest of South India</li>
            </ol>
          </div>
        </div>
        <div className={styles['right-side']}>
          <div className={styles['layout']}>
            <div className={styles['inner-section']}>
              
                <div className={styles['img']}>
                <div className={styles['im']}></div>
                </div>
                <div className={styles['email']}>EMAIL</div>
              
              <div className={styles['mail']}>contactus@nitc.ac.in</div>
              
              
            </div>
        </div>
        
      </div>
      

      </div>
      
    </div>
    </>
  );
}

export default Home;
