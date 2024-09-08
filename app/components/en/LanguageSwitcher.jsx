import Link from "next/link";
import styles from "../../styles/LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  return (
    <div className={styles.languageSwitcher}>
      <Link href="/sv">
        <button>Sv</button>
      </Link>
      <Link href="/en">
        <button>En</button>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
