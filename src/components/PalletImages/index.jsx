import React from 'react'
import styles from './style.module.css'
const PalletImages = ({showCaseImg}) => {
    return (
        <div className={`${styles.showCaseImgContainer} row`}>
            {
                showCaseImg.map((item, key) => {
                    return (
                        <div className={`col-xl-3 col-lg-3 col-md-6 col-sm-12`}>
                            <div key={item.id} className={`${styles.imgWrapper}`}>
                                <img src={item.img} alt='imgs' className={`${styles.img}`} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PalletImages