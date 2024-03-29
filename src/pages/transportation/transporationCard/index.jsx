import React from "react";
import styles from "./style.module.css";
import img1 from "../../../assets/transport1.png";
import img2 from "../../../assets/transport2.png";
import img3 from "../../../assets/transport3.png";
import {constants} from '../../../global/constants'
import useSWR from "swr";
const TransportationCard = () => {


  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading } = useSWR(`${constants.baseUrl}/api/services?pagename=transportation`,fetcher)
  const serviceData = data?.data?.results?.results
  return (
    <div className={styles.fristWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.packageSec}>
              <h1>
                Discover A World Of Transpotaion With Over Popular Services!
              </h1>
            </div>
          </div>

          {serviceData?.map((item) => {
            return (
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div key={item?.id} className={styles.cardWrapper}>
                  <div className={styles.cadImg}>
                    <img src={item?.image?.imageUrl} className="img-fluid" alt={item?.image?.imageName} />
                  </div>
                  <div className={styles.cardWrappertxt}>
                    <div className={styles.hdAmt}>
                      <h3>{item?.serviceName}</h3>
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

export default TransportationCard;
