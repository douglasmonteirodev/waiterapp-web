import { FormEvent, useState } from "react";
import Head from "next/head";

import Header from "../../components/Header";
import styles from "./styles.module.scss";
import { setupAPIClient } from "../../services/api";
import { toast } from "react-toastify";
import { canSRRAuth } from "../../utils/canSSRAuth";

export default function Category() {
  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    if (name === "") {
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post("/category", {
      name,
    });

    toast.success("Categoria cadastrada com sucesso");
    setName("");
  }
  const [name, setName] = useState("");
  return (
    <>
      <Head>
        <title>Nova categoria - Waiter App</title>
      </Head>

      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar categorias</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <input
              type="'text'"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button type="submit" className={styles.buttonAdd}>
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSRRAuth(async (ctx) => {
  return {
    props: {},
  };
});
