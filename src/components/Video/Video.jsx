import React, { useState } from "react";
import styles from "./Video.module.css";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import cover from "../../assets/img/bronze.jpg";
import VideoPlayer from "./VideoPlayer";

function Video() {
  const [play, setPlay] = useState(false);
  const [src, setSrc] = useState(
    "https://player.vimeo.com/external/527275561.sd.mp4?s=e23b4455249edf7672156bb17ce9a6e0ebeff7ba&profile_id=164&oauth2_token_id=57447761"
  );

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div>
          <div className={styles.videoLogo}>
            <h2></h2>
          </div>
          <ul>
            <li>
              <figure>
                <img src={cover} alt="" />
              </figure>
              <div
                onClick={(e) =>
                  setSrc(
                    "https://player.vimeo.com/external/567255456.sd.mp4?s=98c55e985565fe7a164cc5c07669e61321f47eb2&profile_id=165&oauth2_token_id=57447761"
                  )
                }
                className={styles.videoInfo}
              >
                <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h2>
                <div>
                  <p> 2 ‌سال‌پیش</p>
                  <p>‌بازدید 5000</p>
                </div>
              </div>
            </li>
            <li>
              <figure>
                <img src={cover} alt="" />
              </figure>
              <div
                onClick={(e) =>
                  setSrc(
                    "https://player.vimeo.com/external/499168140.sd.mp4?s=2e3f10847456da44de35b62ce6abf67820db7825&profile_id=164&oauth2_token_id=57447761"
                  )
                }
                className={styles.videoInfo}
              >
                <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h2>
                <div>
                  <p> 2 ‌سال‌پیش</p>
                  <p>‌بازدید‌ ‌3000</p>
                </div>
              </div>
            </li>
            <li>
              <figure>
                <img src={cover} alt="" />
              </figure>
              <div
                onClick={(e) =>
                  setSrc(
                    "https://player.vimeo.com/external/446538855.sd.mp4?s=ecfc7446ea0391848007b2697ec82fae1e6e5759&profile_id=164&oauth2_token_id=57447761"
                  )
                }
                className={styles.videoInfo}
              >
                <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h2>
                <div>
                  <p>2 ‌سال‌پیش </p>
                  <p>بازدید 4049</p>
                </div>
              </div>
            </li>
          </ul>
          <div className={styles.allVideosLink}>
            <a href="#">مشاهده تمام ویدیو ها</a>
            <a href="#">
              <BsArrowDownLeftCircleFill />
            </a>
          </div>
        </div>
        <div>
          <VideoPlayer src={src} />
        </div>
      </div>
    </div>
  );
}

export default Video;
