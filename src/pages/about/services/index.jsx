import React from "react";
import styles from "./style.module.css";
import { constants } from "../../../global/constants";
import useSWR from "swr";
const Services = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`${constants.baseUrl}api/services?pagename=about`, fetcher) 
const aboutData = data?.data?.results?.results
  return (
    <div className={styles.fristWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.packageSec}>
              <h4>Package</h4>
              <h1>
                Discover A World Of Transformation With Over Exclusive Packages
              </h1>
            </div>
          </div>

          {aboutData?.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div key={item.id} className={styles.cardWrapper}>
                  <div className={styles.cdimg}>
                    <img src={item?.image?.imageUrl} alt={item?.image?.imageName} className="img-fluid" />
                  </div>
                  <div className={styles.cardWrappertxt}>
                    <div className={styles.hdAmt}>
                      <h3>{item.serviceName}</h3>
                      <h3>${item.price}</h3>
                    </div>
                    <p>{item?.description?.slice(0,100)}</p>
                  </div>
                </div>
              </div>
            );
          }).slice(0,3)}
        </div>
      </div>
    </div>
  );
};

export default Services;
