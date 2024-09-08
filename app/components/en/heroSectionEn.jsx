import * as React from "react";
import styles from "../../styles/heroSection.module.css";
import Link from "next/link";
import Spotlights from "../en/SpotlightsEn";

export default function heroSectionEn() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.div13}>
        <div className={styles.div14}>
          <div className={styles.column}>
            <div className={styles.div15}>
              <div className={styles.div16}>
                An innovative pharmaceutical company
                <br />
                with groundbreaking patents
              </div>
              <div className={styles.div17}>
                <br />
              </div>
              <div className={styles.div18}>
                <div className={styles.div19}>
                  <button className="button-gradient">
                    {" "}
                    <Link className={styles.link} href="/">
                      Next
                    </Link>
                  </button>
                </div>
                <div className={styles.div20}>
                  <div className={styles.div21}>Lihat Alur Belajar</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f075a70d0be1118fac064f171c6e3ad66b9f1929e29ab569e8059a588a0036ce?apiKey=be1c32169407432186037b3ed8861d0e&"
                    className={styles.img2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column2}></div>
        </div>
      </div>
      <div className={styles.div000}>
        <Spotlights />
      </div>
      <div className={styles.div22}>
        <div className={styles.div23}>
          <div className={styles.div24}>
            <div className={styles.div25}>21.000+</div>
            <div className={styles.div26}>Siswa terdaftar</div>
          </div>
          <div className={styles.div27}>
            <div className={styles.div28}>100+</div>
            <div className={styles.div29}>Instruktur Ahli</div>
          </div>
          <div className={styles.div30}>
            <div className={styles.div31}>150+</div>
            <div className={styles.div32}>Kursus Gratis</div>
          </div>
        </div>
        <div className={styles.div33}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b7e0dc5f67871752bd9109ef8aabfaba600527dcf52ab179268316126d0568b?apiKey=be1c32169407432186037b3ed8861d0e&"
            className={styles.img4}
          />
          <div className={styles.div34}>LOREM</div>
        </div>
        <div className={styles.div35}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ce229ad9e827569934dea6978a56c91f55b9f8c693cccd64ec2f0c9a3065bc?apiKey=be1c32169407432186037b3ed8861d0e&"
            className={styles.img5}
          />
          <div className={styles.div36}>DITLANCE</div>
        </div>
        <div className={styles.div37}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c8e437dae08100a8b843f4fb26772f1e53f66394cfdc0d0a8f3f3a585b5d0e?apiKey=be1c32169407432186037b3ed8861d0e&"
            className={styles.img6}
          />
          <div className={styles.div38}>OWTHEST</div>
        </div>
        <div className={styles.div39}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdfa976fd38f99531067b17b21a260c0200c67236403dffe3d46b0a4d50a0609?apiKey=be1c32169407432186037b3ed8861d0e&"
            className={styles.img7}
          />
          <div className={styles.div40}>NEOVASI</div>
        </div>
        <div className={styles.div41}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52cf296b82b228f0d1d968106982653f61f1c8af8eef676775c07acb349e269d?apiKey=be1c32169407432186037b3ed8861d0e&"
            className={styles.img8}
          />
          <div className={styles.div42}>ONAGO</div>
        </div>
      </div>
    </div>
  );
}
