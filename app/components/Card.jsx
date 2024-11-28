import styles from "../styles/Card.module.css";

export default function Card() {
  return (
    <section>
      <div className={styles.cardsdiv}>
        <h1>OLIKA SMÄRTOR</h1>
        <p>
          Smärta kan yttra sig på olika sätt beroende på dess orsak och
          intensitet. Den kan sträcka sig från mild obehag, såsom klåda eller
          irritation orsakad av insektsbett, till mer intensiva känslor som
          brännande, stickande eller svullnad från giftiga stick eller skador.
          Hos människor kan smärta ofta beskrivas och behandlas effektivt, men
          hos djur varierar uttrycken för smärta, vilket gör det svårare att
          diagnostisera och hantera.
        </p>
        <div className={styles.div44}>
          <div className={styles.div45}>
            {/*första bilden */}
            <div className={styles.column3}>
              <div className={styles.div46}>
                <div className={styles.imgContainer}>
                  <img loading="mygg" src="/mygg.jpeg" className={styles.img} />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Myggbett</div>
                    <div className={styles.div48}>
                      Myggbett kan orsaka en intensiv och irriterande smärta på
                      huden. Denna smärta uppstår ofta som en klåda eller
                      brännande känsla. När en mygga biter, injicerar den ett
                      litet antal salivämnen som hindrar blodets koagulering.
                      Kroppen reagerar på dessa ämnen med en inflammatorisk
                      respons som leder till svullnad, rodnad och klåda vid
                      bettet.
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
                    <div className={styles.div47}>Getingbett</div>
                    <div className={styles.div48}>
                      Getingbett kan vara betydligt mer smärtsamma än myggbett.
                      När en geting biter, injicerar den gift genom sin sting,
                      vilket kan orsaka en kraftig smärta och en brännande
                      känsla.Vanliga symtom är svullnad, rodnad och klåda. I
                      vissa fall kan allergiska reaktioner uppstå.
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
                    <div className={styles.div47}>Husdjur</div>
                    <div className={styles.div48}>
                      Husdjur kan uppleva smärta från insektsbett eller skador
                      som en intensiv obehaglig känsla, som de kanske visar
                      genom att slicka, klia eller undvika att röra det drabbade
                      området. Till skillnad från människor har de inte
                      specifika smärtstillande medel för hudbesvär som är säkra
                      och effektiva.
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
                    <div className={styles.div47}>Brännmaneter </div>
                    <div className={styles.div48}>
                      Brännmaneter kan orsaka intensiv smärta, som känns som
                      brännande, stickande eller svidande. De frigör gift genom
                      sina nässelceller, vilket kan leda till rodnad, svullnad
                      och klåda på huden. Behandling inkluderar sköljning med
                      havsvatten och eventuell medicinsk vård beroende på
                      allvarlighetsgrad.
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
                    <div className={styles.div47}>Små barn</div>
                    <div className={styles.div48}>
                      Små bebisar kan uppleva irritation och smärta från olika
                      tillstånd tex som barnsjukdomar eller efter blöjor, vilket
                      kan vara obehagligt för dem. För att lindra dessa symtom
                      behövs smärtstillande medel, men det finns för närvarande
                      inga salvor som är helt säkra för spädbarn.
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
                    <div className={styles.div47}>Boskap</div>
                    <div className={styles.div48}>
                      Boskapet kan uppleva smärta från insektsbett eller utslag
                      som kan orsaka klåda, svullnad och obehag. Dessa djur
                      visar ofta sin smärta genom att vifta med svansen, gnida
                      sig mot ytor eller försöka nå det drabbade området med
                      sina ben. Eftersom de inte kan uttrycka smärta på samma
                      sätt som människor, kan det vara svårt att bedöma deras
                      lidande.
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
