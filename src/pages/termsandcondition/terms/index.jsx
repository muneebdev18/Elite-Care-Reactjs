import React from 'react'
import styles from "./style.module.css";
const Terms = () => {
    const termsdata = [
        {
          heading1: "Cookies",
          para1:
            "We employ the use of cookies. By accessing Beautician.pk, you agreed to use cookies in agreement with the Beautician’s Privacy Policy  Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
        },
        {
          heading2: "License",
          para2:
            "Unless otherwise stated, Beautician and/or its licensors own the intellectual property rights for all material on Beautician.pk. All intellectual property rights are reserved. You may access this from Beautician.pk for your own personal use subjected to restrictions set in these terms and conditions.. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Beautician does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Beautician,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Beautician shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.",
        },
        {
          heading3: "Content Liability",
          para3:
            "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights..",
        },
        {
          heading4: "Disclaimer",
          para4:
            "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights..",
        },
        {
          heading5: "Content Liability",
          para5:
            "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.",
        },
      ];

      return (
        <div className="container " id={styles.main}>
        <div>
          <div className="my-5">
            {termsdata.map((itmes, index) => (
              <div className={styles.content}>
                <div>
                  <h1>{itmes.heading1}</h1>
                  <p>{itmes.para1}</p>
                </div>
                <div>
                  <h1>{itmes.heading2}</h1>
                  <p>{itmes.para2}</p>
                </div>
                <div>
                  <h1>{itmes.heading3}</h1>
                  <p>{itmes.para3}</p>
                </div>
                <div>
                  <h1>{itmes.heading4}</h1>
                  <p>{itmes.para4}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
   
  )
}

export default Terms