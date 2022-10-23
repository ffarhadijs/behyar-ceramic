import React from "react";
import styles from "./Cards.module.css";
import cover from "../../assets/img/photo.webp";
import photo from "../../assets/img/photo.jpg";
import photo1 from "../../assets/img/steel.jpg";
import { MdDoubleArrow } from "react-icons/md";

function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.cardHead}>
        <h2 className="font-vazir">تازه های علمی</h2>
        <a href="#">
          <span>مشاهده آرشیو مطالب</span>
          <span>
            <MdDoubleArrow />
          </span>
        </a>
      </div>
      <div className={styles.cards}>
        <div className={styles.card && styles.firstCard}>
          <a href="#">
            <img src={photo1} />
            <div className={styles.bigCards}>
              <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است که ...</h2>
              <div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
                </p>
                <span className={styles.first}>3</span>
                <span className={styles.second}>دقیقه مطالعه</span>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <a href="#">
            <img src={cover} />
            <div>
              <h2>لورم ایپسوم متن ساختگی است ...</h2>
              <div>
                <p className={styles.longText}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <div className={styles.info}>
                  <span>5</span>
                  <h3>دقیقه مطالعه</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <a href="#">
            <img src={cover} />
            <div>
              <h2>لورم ایپسوم متن ساختگی است ...</h2>
              <div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <div className={styles.info}>
                  <span>5</span>
                  <h3>دقیقه مطالعه</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <a href="#">
            <img src={cover} />
            <div>
              <h2>لورم ایپسوم متن ساختگی است ...</h2>
              <div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <div className={styles.info}>
                  <span>5</span>
                  <h3>دقیقه مطالعه</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <a href="#">
            <img src={cover} />
            <div>
              <h2>لورم ایپسوم متن ساختگی است ...</h2>
              <div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <div className={styles.info}>
                  <span>5</span>
                  <h3>دقیقه مطالعه</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.card && styles.lastCard}>
          <a href="#">
            <img src={photo} />
            <div className={styles.bigCards}>
              <h2> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است که ...</h2>
              <div>
                <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <span className={styles.first}>3</span>

                <span className={styles.second}>دقیقه مطالعه</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
