import { useRouter } from "next/router";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const signUpHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data)
    if (data.status === "success") router.push("/signin");
  };

  return (
    <div className="customer-page">
      <h4>Registration Form</h4>
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
        <button className="second" onClick={signUpHandler}>
          SignUp
        </button>
      </div>
    </div>
  );
}

export default Signup;
