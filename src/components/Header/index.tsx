import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import styles from "./styles.module.scss";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const { signOut } = useContext(AuthContext);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.areaImg}>
          <img src="/logo.svg" alt="logo" />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">Categoria</Link>
          <Link href="/product">Novo produto</Link>

          <button onClick={signOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
