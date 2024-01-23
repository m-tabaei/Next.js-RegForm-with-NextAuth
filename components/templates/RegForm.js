import Link from "next/link";
import styles from "../../styles/Home.module.css";
function RegForm() {
  return (
    <div className={styles.container}>
      <h1>RegForm</h1>
      <button>
        <Link href="/signin">Register/Login</Link>
      </button>
     
     
    </div>
  );
}

export default RegForm;
