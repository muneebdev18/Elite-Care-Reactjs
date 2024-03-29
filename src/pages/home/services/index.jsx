import React from "react";
import styles from "./style.module.css";
import Arrow from "../../../assets/rightArrow.png";
import useSWR from 'swr'
import {constants} from '../../../global/constants'
const Services = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`${constants.baseUrl}api/services?pagename=home&page=1&limit=10`, fetcher)
  const serviceData = data?.data?.results?.results
  console.log(serviceData);

  return (
    <section className={styles.servicesWrapper}>
      <div className={`container-fluid`}>
        <div className={`row ${styles.upperSectionWrapper}`}>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className={styles.ServicesUpperSection}>
              <div className={styles.servicesImgWrapper}>
                <p>SERVICES</p>
              </div>
              <p className={styles.title}>tourism in Turkey</p>
            </div>
          </div>
        </div>
        <div className={`row ${styles.serviceImgWrapperRow}`}>
          {serviceData &&
            serviceData.map((item) => {
              return (
                <div className="col">
                  <div className={styles.imgWrapper}>
                    <div className={styles.servicesCardImgsWrapper}>
                      <img src={item?.image?.imageUrl} />
                    </div>
                    <div className={styles.descWrapper}>
                      <p className={styles.place}>{item.serviceName}</p>
                      <p className={styles.price}>${item.price}</p>
                      <div className={styles.readMore}>
                        <p>READ MORE</p>
                        <img src={Arrow} alt="arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }).slice(0,5)}
        </div>
      </div>
    </section>
  );
};

export default Services;
