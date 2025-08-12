"use client";
import { useRouter } from "next/navigation";
import styles from "../../../nyheter/majnyheter/MajNyheter.module.css";

export default function Produktion() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.img3}
          src="/Nyheter/augusti2025.jpeg"
          alt="August News 2025"
        />
      </div>
      <h1 className={styles.title}>Newsletter – August 2025</h1>
      <h4 className={styles.date}>2025-08-08</h4>

      <p>Hello,</p>

      <p className={styles.text}>
        As summer draws to a close, we at AUXESIS PHARMA HOLDING AB (publ) are
        gearing up for an active and ambitious autumn. Throughout the summer,
        our pharmaceutical formulation development and testing have continued
        without interruption—this process never takes a vacation. The need for
        medicines like ASA.P remains substantial. This summer has been both warm
        and wet, providing ideal conditions for the proliferation of wasps and
        other stinging insects.
      </p>

      <p className={styles.text}>
        At Auxesis Pharma’s Annual General Meeting,{" "}
        <strong>Magnus Larsson</strong> was elected as the new Chairman of the
        Board. Magnus holds a degree in Economics from Stockholm University,
        specializing in accounting and finance. He has an extensive career as an
        entrepreneur, business executive, and strategist, and has held senior
        roles in the IT industry since the 1980s. He has also served on the
        board of the Confederation of Swedish Enterprise.
      </p>

      <p className={styles.text}>
        As Auxesis continues to grow, the company is strengthening its team.
        This August, we welcome <strong>Robert Lindh</strong> as a new employee.
        Robert has extensive experience as an analyst and in information
        management, both in Sweden and internationally. He will be joining the
        team to focus on research and provide support to the CEO and Deputy CEO.
        Having already worked with Auxesis Animal Care AB as a consultant,
        Robert brings valuable expertise, particularly as Auxesis Animal Care
        (CoxyPet) enters an important growth phase.
        <br /> <br />
        At the end of September, we expect the results of our six-month
        pharmaceutical studies. In the autumn, we will initiate efficacy
        studies, a critical stage in the development of any medicine.
        <br /> <br />
        We are also preparing to launch our pre-IPO process. We intend for
        Edlund & Partners to serve as our lead auditor in this stage. A pre-IPO
        does not mean we are immediately ready for listing, but rather that we
        will undergo a thorough assessment against stock market listing
        requirements. This review will identify any gaps or shortcomings that
        must be addressed before pursuing an IPO.
      </p>

      <p className={styles.text}>
        Planning for our pharmaceutical production facility will also begin this
        autumn, with installation of production machinery in our Östersund site
        to follow. We have signed a letter of intent with Högbloms Legomontage
        AB in Vallentuna for the manufacturing of the equipment. Högbloms has
        significant expertise in producing high-technology machinery,
        integrating mechanics, electronics, and assembly into complete
        production units. We will also GMP-certify the facility in accordance
        with requirements from the Swedish Medical Products Agency and other
        authorities.
        <br /> <br />
        This autumn, we will relocate our Stockholm headquarters to the
        Karolinska Institute in Solna (Campus Solna), gaining proximity to the
        medical community as well as access to laboratory capacity.
        <br /> <br />
        In addition to ASA.P for OTC applications, we are beginning needs
        assessments and clinical discussions for more potent, future
        prescription-only medicines—particularly for advanced wound care, such
        as in cancer patients. We will share more on these initiatives in future
        newsletters.
      </p>

      <p>
        <strong>
          Sincerely, <br /> Peter Åberg <br /> CEO, Auxesis Pharma AB
        </strong>
      </p>
    </div>
  );
}
