import React from 'react'
import Headers from '../header/Headers'
import Sidebar from '../sidebar/Sidebar'
import Style from './Style.module.css'
import img from "../../../assets/Dentist.png";
import useSWR from 'swr';
import { constants } from '../../../global/constants';
import { useParams } from 'react-router-dom';
const ViewAppoitment = () => {
const {id} = useParams()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading } = useSWR(`${constants.baseUrl}/api/appoinment/${id}`,fetcher)
const viewData = data?.data
  return (
    <div className="d-flex">
    <div>
      <Sidebar />
    </div>
    <div className="w-100">
      <Headers/>
      <div className='mx-4'>
    <h1> ViewAppoitment </h1>
    <div className={`container d-flex ${Style.profilecard}`}>
              <div className={Style.profile}>  <img src={img} width={250} height={250} alt="img" /></div>
              <div className={Style.profiletext}>
                <div className="">
                  <h5>Name :</h5>
                  <p>{viewData?.name}</p>
                  
                </div>
                <div>
                  <h5>Email :</h5>
                  <p>{viewData?.email}</p>
                  
                </div>
                <div>
                  <h5>Gender : </h5>
                  <p>{viewData?.phoneno}</p>
                  
                </div>
             
               
              
              </div>
            </div>
    </div>
    </div>
  </div>
  )
}

export default ViewAppoitment