import { signOut, useSession } from "next-auth/react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

function Layout({ children }) {
  const { status } = useSession();

  const logOutHandler = () => {
    signOut();
  };
  return (
    <>
      <header className="header">
        <div className={styles.container}>
          <h1>CRM Emperial.Co</h1>

          {status === "authenticated" ? (
            <>
              <button>
                <Link href="/">Home</Link>
              </button>
              <button>
                <Link href="/dashboard">Dashbord</Link>
              </button>
              <button onClick={logOutHandler}>LogOut</button>
              <button>
                <Link href="/profile">Profile</Link>
              </button>
            </>
          ) : null}
        </div>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="http://www.emperial-co.com" target="_blank" rel="noreferrer">
          {" "}
          Emperial-co
        </a>{" "}
        Nex.js | CRM Project
      </footer>
    </>
  );
}

export default Layout;
