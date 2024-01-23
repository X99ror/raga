import React from 'react';
import styles from './contact.module.css';


function Contact() {
  return (
  <><div className={styles['page']}>
    
    <div className={styles['contact-us']}>Contact us</div>
    <div className={styles['center']}>
      <div className={styles['bl-1']}>
           <div className={styles['img-bo1']}>
              <div className={styles['im1']}>
               </div>
              

            </div>
            <div className={styles['by-phone']}>BY PHONE</div>
            <div className={styles['text1']}>+91 9994058168</div>
      </div>
      <div className={styles['bl-2']}>
           <div className={styles['img-bo2']}>
              <div className={styles['im2']}>
              

              </div>
              
            </div>
            <div className={styles['find-us']}>FIND US</div>

            <div className={styles['text2']}>National Institute of Technology Calicut, Kerala 673601</div>
      </div>
      <div className={styles['bl-3']}>
           <div className={styles['img-bo3']}>
              <div className={styles['im3']}>
              
              
              </div>
              

            </div>
            <div className={styles['by-email']}>BY EMAIL</div>
            <div className={styles['text3']}>contactus@nitc.ac.in</div>
      </div>      
    </div>
    
  </div></>
  );
}

export default Contact;