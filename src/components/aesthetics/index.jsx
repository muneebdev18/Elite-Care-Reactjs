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

const Aesthetic = () => {
    const [select, setSelect] = useState({
        id: null,
        active: false
    });
    console.log(select);


    const data = [
        {
            id: 1,
            imgLeft: Botox,
            headingLeft: "Botox",

        },
        {
            id: 2,
            imgRight: CheekFilling,
            headingRight: "Cheek Filling",
        },
        {
            id: 3,
            imgLeft: Jaw,
            headingLeft: "Jaw Filling",

        },
        {
            id: 4,
            imgRight: Cheekbone,
            headingRight: "Cheekbone Filler",
        },
        {
            id: 5,
            imgLeft: UnderEye,
            headingLeft1: "under-eye ",
            headingLeft2: "light filling",
        },
        {
            id: 6,
            imgRight: Forehead,
            headingRight: "forhead-temple-under eyebrow filling",
        },
        {
            id: 7,
            imgLeft: Nasal,
            headingLeft: "Nasal Filling",
        },
        {
            id: 8,
            imgRight: Lip,
            headingRight: "Lip Filler",
        },
    ]
    const dotImgs = [
        {
            id: 1,
            img: Dot
        },
        {
            id: 2,
            img: Dot
        },
        {
            id: 3,
            img: Dot
        },
        {
            id: 4,
            img: Dot
        }
    ]

    const dotHandler = (id) => {
        console.log("Dot Img Id", id);

        for (var i = 0; i < data.length; i++) {
            if (id === data[i].id) {
                setSelect(!select)
            }
        }

    }
    return (
        <div className="container container-xl-fluid">
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
                    <img src={dotImgs[0].img} alt='Dot' onClick={() => dotHandler(dotImgs[0].id)} className='position-absolute' style={{ top: "300px", left: "300px", zIndex: 2 }} />
                    <img src={dotImgs[1].img} alt='Dot' onClick={() => dotHandler(dotImgs[1].id)} className='position-absolute' style={{ top: "400px", left: "400px", zIndex: 2 }} />
                    <img src={dotImgs[2].img} alt='Dot' onClick={() => dotHandler(dotImgs[2].id)} className='position-absolute' style={{ top: "500px", left: "300px", zIndex: 2 }} />
                    <img src={dotImgs[3].img} alt='Dot' onClick={() => dotHandler(dotImgs[3].id)} className='position-absolute' style={{ top: "500px", left: "500px", zIndex: 2 }} />
                    <img src={CuteFace} alt='Cute Face' className='position-absolute' style={{ left: "60px", top: "70px" }} />
                    <img src={DottedCircle} alt='Dotted Circle' className={`position-absolute ${styles.dottedCircle}`} />
                </div>
                <div className={`row ${styles.firstRow}`}>
                    <div className={`col-7 ${select.active ? "opacity-100" : "opacity-25"}`}><span style={{ fontSize: "36px", paddingRight: "30px" }}>{data[0].headingLeft}</span><img src={data[0].imgLeft} alt='Botox' /></div>
                    <div className={`col-5 ${select ? "opacity-100" : "opacity-25"}`}><img src={data[1].imgRight} alt='Cheek Filling' /><span style={{ fontSize: "36px", paddingLeft: "30px" }}>{data[1].headingRight}</span></div>
                </div>
                <div className={`row ${styles.secondRow}`}>
                    <div className='col-9'><span style={{ fontSize: "36px", paddingRight: "30px" }}>{data[2].headingLeft}</span><img src={data[2].imgLeft} alt='Jaw' /></div>
                    <div className='col-3 position-relative'>
                        <img src={data[3].imgRight} alt='Cheekbone Filling' style={{ paddingLeft: "40px" }} />
                        <span className='position-absolute' style={{ fontSize: "36px", paddingLeft: "30px" }}>{data[3].headingRight}</span>
                    </div>
                </div>
                <div className={`row position-relative ${styles.thirdRow}`}>
                    <div className='col-9'>
                        <span style={{ fontSize: "36px", paddingRight: "30px" }} >{data[4].headingLeft1}<br />{data[4].headingLeft2}</span>
                        <img src={data[4].imgLeft} alt='UnderEye' className='position-absolute' style={{ bottom: 0 }} />
                    </div>
                    <div className='col-3' style={{ paddingLeft: "40px" }}>
                        <img src={data[5].imgRight} alt='Forehead' className='position-relative' />
                        <span className='position-absolute' style={{ fontSize: "36px", paddingLeft: "30px", width: "25%" }}>{data[5].headingRight}</span>
                    </div>
                </div>
                <div className={`row ${styles.forthRow}`}>
                    <div className='col-7'>
                        <span style={{ fontSize: "36px", paddingRight: "30px" }}>{data[6].headingLeft}</span>
                        <img src={data[6].imgLeft} alt='Nasal' />
                    </div>
                    <div className='col-5'>
                        <img src={data[7].imgRight} alt='Lip' />
                        <span style={{ fontSize: "36px", paddingLeft: "30px" }}>{data[7].headingRight}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Aesthetic;