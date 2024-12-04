import styles from "../styles/Card.module.css";

export default function Card() {
  return (
    <section>
      <div className={styles.cardsdiv}>
        <h1>Different Types of Pain</h1>
        <p>
          Pain can manifest in various forms, depending on its cause and
          intensity. It may range from mild discomfort, such as itching or
          irritation caused by insect bites, to more severe sensations, like
          burning, stinging, or swelling resulting from venomous stings or
          injuries. In humans, pain can often be described and treated
          effectively, but in animals, pain expression varies, making it more
          difficult to diagnose and manage.
        </p>
        <div className={styles.div44}>
          <div className={styles.div45}>
            {/*första bilden */}
            <div className={styles.column3}>
              <div className={styles.div46}>
                <div className={styles.imgContainer}>
                  <img loading="mygg" src="/mygg.jpeg" className={styles.img} />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Mosquito bite</div>
                    <div className={styles.div48}>
                      Mosquito bites can cause intense and irritating discomfort
                      on the skin. This discomfort often manifests as itching or
                      a burning sensation. When a mosquito bites, it injects a
                      small amount of saliva that prevents blood from clotting.
                      The body reacts to these substances with an inflammatory
                      response, leading to swelling, redness, and itching at the
                      site of the bite.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*andra bild getting */}
            <div className={styles.column4}>
              <div className={styles.div49}>
                <div className={styles.imgContainer}>
                  <img loading="lazy" src="/bin.png" className={styles.img} />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Wasp Stings</div>
                    <div className={styles.div48}>
                      Wasp stings can be significantly more painful than
                      mosquito bites. When a wasp stings, it injects venom
                      through its sting, which can cause intense pain and a
                      burning sensation. Common symptoms include swelling,
                      redness, and itching. In some cases, allergic reactions
                      may occur.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*tredje bild hund och katt */}
            <div className={styles.column5}>
              <div className={styles.div52}>
                <div className={styles.imgContainer}>
                  <img
                    loading="hund och katt"
                    src="/hundokatt.jpeg"
                    className={styles.img}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Pets</div>
                    <div className={styles.div48}>
                      Pets can experience pain from insect bites or injuries as
                      an intense, unpleasant sensation, which they may express
                      by licking, scratching, or avoiding contact with the
                      affected area. Unlike humans, they do not have specific
                      pain relief treatments for skin discomfort that are both
                      safe and effective.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*fjärde bild maneter */}

        <div className={styles.div56}>
          <div className={styles.div57}>
            <div className={styles.column6}>
              <div className={styles.div58}>
                <div className={styles.imgContainer}>
                  <img
                    loading="manet"
                    src="/maneter.jpeg"
                    className={styles.img}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Jellyfish </div>
                    <div className={styles.div48}>
                      Jellyfish can cause intense pain, often described as
                      burning, stinging, or prickling sensations. They release
                      venom through their nematocysts, which can result in
                      redness, swelling, and itching on the skin. Treatment
                      includes rinsing the area with seawater and seeking
                      medical attention if the reaction is severe.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*femte bild baby */}
            <div className={styles.column7}>
              <div className={styles.div61}>
                <div className={styles.imgContainer}>
                  <img loading="lazy" src="/baby.jpeg" className={styles.img} />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Infants</div>
                    <div className={styles.div48}>
                      Infants can experience irritation and pain from various
                      conditions, such as teething or diaper rash, which can be
                      very uncomfortable for them. To alleviate these symptoms,
                      pain relief is often needed; however, there are currently
                      no topical ointments that are entirely safe for use on
                      infants.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*sista bild hästen */}
            <div className={styles.column8}>
              <div className={styles.div64}>
                <div className={styles.imgContainer}>
                  <img
                    loading="lazy"
                    src="/horse.jpeg"
                    className={styles.img}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Livestock</div>
                    <div className={styles.div48}>
                      Livestock can experience pain from insect bites or rashes,
                      which may lead to itching, swelling, and discomfort. These
                      animals often show their pain by swishing their tails,
                      rubbing against surfaces, or attempting to reach the
                      affected area with their legs. Since they cannot express
                      pain in the same way humans do, it can be challenging to
                      assess their level of suffering.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
