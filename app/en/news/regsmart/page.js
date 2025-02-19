import styles from "./index.module.css";

export default function RegSmart() {
  return (
    <div className={styles.details}>
      <h1 className={styles.h1div}>
        {" "}
        New Partner – <br />
        RegSmart Life Sciences AB
      </h1>
      <h4>2024-07-11</h4>
      <div className={styles.ptext}>
        <p>
          We have now established a partnership with RegSmart Life Sciences AB
          to receive guidance on current applications and approval processes
          with the Swedish Medical Products Agency.
        </p>
        <br />

        <p>
          RegSmart Life Sciences is a regulatory consulting firm specializing in
          pharmaceuticals and medical technology products, helping clients
          navigate the complex and evolving regulatory landscape. With extensive
          regulatory experience from senior positions at regulatory authorities
          and both small and large life science companies, RegSmart simplifies
          the process by knowing what needs to be done, when, and how. <br />
          <br />
          RegSmart Life Sciences provides tailored advice and support regarding
          European and U.S. regulatory requirements, assisting clients in
          developing a regulatory plan as part of their overall project
          strategy.
        </p>
        <br />

        <p>
          The company’s expertise lies in analyzing and interpreting regulatory
          guidelines and decisions from authorities in the EU and the U.S.,
          helping clients respond to specific regulatory questions within their
          projects. RegSmart Life Sciences supports clients from early-stage
          research throughout the entire product lifecycle, always keeping the
          target product profile in focus.
        </p>
      </div>
    </div>
  );
}
