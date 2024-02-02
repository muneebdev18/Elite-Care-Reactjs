import React from 'react'
import styles from './style.module.css'
import sectionImg from '../../../assets/whoWeAre.png'
const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAreContainer}>
      <div className='container'>
        <div className={`row ${styles.whoWeAreWrapper}`}>
          <div className='col-xl-4 col-lg-4 col-md-4'>
            <div className={styles.leftSide}>
              <img src={sectionImg} alt='who we are' />
            </div>
          </div>
          <div className='col-xl-8 col-lg-8 col-md-8'>

            <div className={styles.righSide}>
              {/* Pick out Image from Figma maie Paste Here ! */}
              {/* <div className={styles.whoWeAreImg}>
              <img src={} alt='who we are'/>
            </div> */}
              <div className={styles.whoWeAreHeading}>
                <p>WHO WE ARE</p>
              </div>
              <p className={styles.whoWeAreTitle}>
                exceptional Care <br /> Exceptional Technology
              </p>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                  <div className={styles.cardMissionWrapper}>
                    <div className={styles.missionText}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
                      </p>
                    </div>
                    <div className={styles.missionTitle}>
                      OUR MISSION
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                  <div className={styles.cardVisionWrapper}>
                    <div className={styles.visionText}>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
                      </p>
                    </div>
                    <div className={styles.visionTitle}>
                      OUR MISSION
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre