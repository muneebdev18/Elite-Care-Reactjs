import React from 'react'
import styles from './style.module.css'
import logo from '../../../assets/testimonalLogo.png'
import imgTestimonal from '../../../assets/testimonal.png'
import rightArrow from '../../../assets/testimonalRightArrow.png'
import leftArrow from '../../../assets/testimonalLeftArrow.png'
const Testimonal = () => {
  return (
    <section className={styles.testContainer}>
      <div className='container container-fluid-md'>
        <div className={`row ${styles.testWrapper}`}>
          <div className='col-xl-5 col-lg-5 col-md-5'>
            <div className={styles.leftSide}>
              <div className={styles.imgTest}>
                <img src={imgTestimonal} alt="" />
              </div>
            </div>
          </div>
          <div className='col-xl-7 col-lg-7 col-md-7'>
            <div className={styles.rightSide}>
              <div className={styles.testimonalHeading}>
                <p>TESTIMONAL</p>
              </div>
              <p className={styles.title}>What Our Customers <br />Says about Us</p>
              <p className={styles.testimonal}>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled”
              </p>
              <div className={styles.reviewWrapper}>
                <div className={styles.authorWrapper}>
                  <p className={styles.name}>Ferrero Decosta</p>
                  <p className={styles.JD}>CTO</p>
                </div>
                <div className={styles.arrowsWrapper}>
                  <img src={leftArrow} alt="" />
                  <img src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonal