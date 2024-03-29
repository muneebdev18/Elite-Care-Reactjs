import React from "react";
import Styles from "./style.module.css";
import useSWR from "swr";
import {constants} from '../../../global/constants'
const SurgicalCard = (props) => {
  
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading } = useSWR(`${constants.baseUrl}api/services?pagename=servicesOffered`,fetcher)

  const serviceData = data?.data?.results?.results
  return (
    <div id={Styles.bgcolor}>
      <div className="container">
        <div className="row " id={Styles.sec1main}>
          <div className="col-12" id={Styles.sec1col}>
            <div id={Styles.maintext} className={Styles.textWrapper}>
              <p>SERVICES</p>
              <h1>Affordable Services That Provide By Surgical</h1>
            </div>
          </div>
          <div className="row" id={Styles.sec2main}>
            {serviceData?.map((items) => (
              <div className="col-12 col-md-6 col-lg-4">
                <div className={Styles.column}>
                  <div className={Styles.imgdiv}>
                    <img src={items?.image?.imageUrl} alt={items?.image?.imageName} />
                  </div>
                  <div className={Styles.columtext}>
                    <div className="d-flex flex-row justify-content-between">
                      <div>
                        <h2>{items.serviceName}</h2>
                      </div>
                      <div>
                        <p>${items.price}</p>
                      </div>
                    </div>

                    <p>{items.description.slice(0,100)}</p>
                  </div>
                </div>
              </div>
            )).slice(0,6)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgicalCard;
