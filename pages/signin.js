import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data, status } = useSession();

  console.log({ data, status });

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.replace("/dashboard");
  }, [status]);

  const loginHandler = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!res.error) router.replace("/dashboard");
  };

  return (
    <div className="customer-page">
      <h4>Login CRM Emperial</h4>
      <div className="form-input">
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="customer-page__buttons">
        <button className="second" onClick={loginHandler}>
          Login
        </button>

        <button className="third">
          <Link href="/signup">SignUp?</Link>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
