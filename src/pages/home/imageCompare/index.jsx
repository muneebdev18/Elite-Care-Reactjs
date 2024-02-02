import ReactCompareImage from "react-compare-image";
import styles from "./style.module.css";
import img1 from "../../../assets/face1.png";
import img2 from "../../../assets/face2.png";

const ImageComparison = () => {
  return (
    <section id={styles.imgId} className={styles.imageWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-8 col-sm-12">
            <div className={styles.compereimg}>
              <div className={styles.titleWrapper}>
                <h4>Before/After</h4>
                <h1 className={styles.headingTransformation}>Transformation</h1>
              </div>
              <div className={styles.imageComparisonContainer}>
                <ReactCompareImage
                  leftImage={img1}
                  rightImage={img2}
                  handle={
                    <div
                      style={{ borderRadius: "20px" }}
                      className={styles.sliderHandle}
                    ></div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageComparison;
