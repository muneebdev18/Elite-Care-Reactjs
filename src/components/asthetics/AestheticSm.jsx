import React, { useState } from 'react';
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

import styles from "./style.module.css";
const AestheticSm = ({ screenSize }) => {
    const [select, setSelect] = useState({
        id: null,
        content: 'Botox',
        img: Botox
    });

    const data = [
        {
            id: 1,
            img: Botox,
            content: "Botox",
            select: false
        },
        {
            id: 2,
            img: CheekFilling,
            content: "Cheek Filling",
            select: false
        },
        {
            id: 3,
            img: Jaw,
            content: "Jaw Filling",
            select: false
        },
        {
            id: 4,
            img: Cheekbone,
            content: "Cheekbone Filler",
            select: false
        },
        {
            id: 5,
            img: UnderEye,
            content: "under-eye light filling",
            select: false
        },
        {
            id: 6,
            img: Forehead,
            content: "forhead-temple-under eyebrow filling",
            select: false
        },
        {
            id: 7,
            img: Nasal,
            content: "Nasal Filling",
            select: false
        },
        {
            id: 8,
            img: Lip,
            content: "Lip Filler",
            select: false
        },
    ]

    const dotImgs = [
        {
            id: 1,
            img: Dot,
            top: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "140px" : "170px" : "220px" : "240px",
            left: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "240px" : "295px" : "380px" : "420px"
        },
        {
            id: 2,
            img: Dot,
            top: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "200px" : "250px" : "340px" : "390px",
            left: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "260px" : "320px" : "410px" : "470px"
        },
        {
            id: 3,
            img: Dot,
            top: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "230px" : "295px" : "395px" : "460px",
            left: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "230px" : "280px" : "355px" : "400px"
        },
        {
            id: 4,
            img: Dot,
            top: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "180px" : "230px" : "300px" : "360px",
            left: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "265px" : "325px" : "420px" : "480px"
        },
        {
            id: 5,
            img: Dot,
            top: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "178px" : "225px" : "295px" : "345px",
            left: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "202px" : "240px" : "295px" : "330px"
        },
        {
            id: 6,
            img: Dot,
            top: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "150px" : "190px" : "250px" : "280px",
            left: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "205px" : "240px" : "295px" : "330px"
        },
        {
            id: 7,
            img: Dot,
            top: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "185px" : "235px" : "310px" : "360px",
            left: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "222px" : "265px" : "335px" : "375px"
        },
        {
            id: 8,
            img: Dot,
            top: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "202px" : "260px" : "345px" : "400px",
            left: screenSize < 768 ? screenSize < 640 ? screenSize < 440 ? "235px" : "285px" : "370px" : "410px"
        }
    ]

    const dotHandler = (id) => {
        for (var i = 0; i < data.length; i++) {
            if (id === data[i].id) {
                data[i].select = !data[i].select;
                setSelect({ id: id, content: data[i].content, img: data[i].img });
            } else {
                data[i].select = false;
            }
        }
    }

    return (
        <div>
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
            <div style={{ paddingTop: '100px' }}>
                <div className={styles.imageSec}>
                    <div className={styles.containImage}>
                        {
                            dotImgs.map((item) => (
                                <img
                                    key={item.id} alt='Dots' src={item.img} onClick={() => dotHandler(item.id)}
                                    className={`position-absolute ${styles.dottedImg}`} style={{ top: item.top, left: item.left, zIndex: 2 }}
                                />
                            ))
                        }

                        <img src={CuteFace} alt='Cute Face' className={`position-absolute ${styles.cuteImg}`} />
                        <img src={DottedCircle} alt='Dotted Circle' className={`position-absolute ${styles.dottedCircle}`} />
                        <div className={`${styles.selectedImg}`}>
                            <p style={{ width: '400px' }}>{select.content}</p>
                            <img className={styles.resImg} style={{ paddingLeft: '10px' }} src={select.img} alt='URL' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AestheticSm;