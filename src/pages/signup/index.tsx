import { FormEvent, useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import logoImg from "../../../public/logo.svg";
import styles from "../../../styles/home.module.scss";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.warning("Preencha todos os campos");
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password,
    };
    signUp(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Waiter App - Faça seu cadastro</title>
      </Head>

      <div className={styles.containerCenter}>
        <div className={styles.areaImg}>
          <Image src={logoImg} className={styles.logo} alt="logoApp" />
        </div>

        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Digite seu nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
              Cadastrar
            </Button>
          </form>
          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça login
          </Link>
        </div>
      </div>
    </>
  );
}
