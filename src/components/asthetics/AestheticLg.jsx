import React, { useState } from 'react';
import styles from "./style.module.css";

import Forehead from '../../assets/Foreheadtempleundereyebrowfilling.png';
import Jaw from '../../assets/Jaw-filling.png';
import Lip from '../../assets/Lip-filler.png';
import Nasal from '../../assets/Nasal-filling.png';
import UnderEye from '../../assets/under-eye-light-filling.png';
import Botox from '../../assets/Botox.png';
import Cheekbone from '../../assets/Cheekbone-Filler.png';
import CheekFilling from '../../assets/Cheek-Filling.png';
import DottedCircle from '../../assets/dottedcircle.png';
import CuteFace from '../../assets/cuteface.png';
import Dot from '../../assets/dot.png';

const AestheticLg = () => {
    const [select, setSelect] = useState({
        id: null,
        active: false
    });

    const data = [
        {
            id: 1,
            imgLeft: Botox,
            headingLeft: "Botox",
            select: false
        },
        {
            id: 2,
            imgRight: CheekFilling,
            headingRight: "Cheek Filling",
            select: false
        },
        {
            id: 3,
            imgLeft: Jaw,
            headingLeft: "Jaw Filling",
            select: false
        },
        {
            id: 4,
            imgRight: Cheekbone,
            headingRight: "Cheekbone Filler",
            select: false
        },
        {
            id: 5,
            imgLeft: UnderEye,
            headingLeft1: "under-eye ",
            headingLeft2: "light filling",
            select: false
        },
        {
            id: 6,
            imgRight: Forehead,
            headingRight: "forhead-temple-under eyebrow filling",
            select: false
        },
        {
            id: 7,
            imgLeft: Nasal,
            headingLeft: "Nasal Filling",
            select: false
        },
        {
            id: 8,
            imgRight: Lip,
            headingRight: "Lip Filler",
            select: false
        },
    ]
    const dotImgs = [
        {
            id: 1,
            img: Dot,
            top: "280px",
            left: "410px"
        },
        {
            id: 2,
            img: Dot,
            top: "450px",
            left: "470px"
        },
        {
            id: 3,
            img: Dot,
            top: "535px",
            left: "400px"
        },
        {
            id: 4,
            img: Dot,
            top: "400px",
            left: "490px"
        },
        {
            id: 5,
            img: Dot,
            top: "400px",
            left: "320px"
        },
        {
            id: 6,
            img: Dot,
            top: "330px",
            left: "320px"
        },
        {
            id: 7,
            img: Dot,
            top: "420px",
            left: "370px"
        },
        {
            id: 8,
            img: Dot,
            top: "465px",
            left: "410px"
        }
    ]

    const dotHandler = (id) => {
        for (var i = 0; i < data.length; i++) {
            if (id === data[i].id) {
                data[i].select = !data[i].select;
                setSelect({ id: id, active: data[i].select });
            } else {
                data[i].select = false;
            }
        }
    }
    return (
        <div className='container'>
        <div className={`row`}>
            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className={styles.upperSection}>
                    <div className={styles.services}>
                        <p>Services</p>
                    </div>
                    <p className={styles.title}>
                        Transforming beauty,
                        <br /> enhancing confidence
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.imageSec}>
            <div className={styles.cuteImg}>
                {
                    dotImgs.map((item) => (
                        <img
                            key={item.id} alt='Dots' src={item.img} onClick={() => dotHandler(item.id)}
                            className="position-absolute" style={{ top: item.top, left: item.left, zIndex: 2 }}
                        />
                    ))
                }

                <img src={CuteFace} alt='Cute Face' className='position-absolute' style={{ left: "60px", top: "70px" }} />
                <img src={DottedCircle} alt='Dotted Circle' className={`position-absolute ${styles.dottedCircle}`} />
            </div>
            <div className={`row ${styles.firstRow}`}>
                <div className={`col-7 ${select.active && select.id === data[0].id ? "opacity-100" : "opacity-25"}`}>
                    <span className={styles.spanRight}>{data[0].headingLeft}</span>
                    <img src={data[0].imgLeft} alt='Botox' />
                </div>
                <div className={`col-5 ${select.active && select.id === data[1].id ? "opacity-100" : "opacity-25"}`}>
                    <img src={data[1].imgRight} alt='Cheek Filling' />
                    <span className={styles.spanLeft}>{data[1].headingRight}</span>
                </div>
            </div>
            <div className={`row ${styles.secondRow}`}>
                <div className={`col-9 ${select.active && select.id === data[2].id ? "opacity-100" : "opacity-25"}`}>
                    <span className={styles.spanRight}>{data[2].headingLeft}</span>
                    <img src={data[2].imgLeft} alt='Jaw' />
                </div>
                <div className={`col-3 position-relative ${select.active && select.id === data[3].id ? "opacity-100" : "opacity-25"}`}>
                    <img src={data[3].imgRight} alt='Cheekbone Filling' style={{ paddingLeft: "40px" }} />
                    <span className={`position-absolute ${styles.spanLeft}`}>{data[3].headingRight}</span>
                </div>
            </div>
            <div className={`row position-relative ${styles.thirdRow}`}>
                <div className={`col-9 ${select.active && select.id === data[4].id ? "opacity-100" : "opacity-25"}`}>
                    <span className={styles.spanRight}>{data[4].headingLeft1}<br />{data[4].headingLeft2}</span>
                    <img src={data[4].imgLeft} alt='UnderEye' className='position-absolute' style={{ bottom: 0,left:'230px' }} />
                </div>
                <div className={`col-3 ${select.active && select.id === data[5].id ? "opacity-100" : "opacity-25"}`} style={{ paddingLeft: "40px" }}>
                    <img src={data[5].imgRight} alt='Forehead' className='position-relative' />
                    <span className={`position-absolute ${styles.spanLeft}`} style={{ width: "25%" }}>{data[5].headingRight}</span>
                </div>
            </div>
            <div className={`row ${styles.forthRow}`}>
                <div className={`col-7 ${select.active && select.id === data[6].id ? "opacity-100" : "opacity-25"}`}>
                    <span className={styles.spanRight}>{data[6].headingLeft}</span>
                    <img src={data[6].imgLeft} alt='Nasal' />
                </div>
                <div className={`col-5 ${select.active && select.id === data[7].id ? "opacity-100" : "opacity-25"}`}>
                    <img src={data[7].imgRight} alt='Lip' />
                    <span className={styles.spanLeft}>{data[7].headingRight}</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AestheticLg