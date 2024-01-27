import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
function Profile({ session }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const submitHandler = async () => {
    try {
      const res = await fetch("/api/update-info", {
        method: "POST",
        body: JSON.stringify({ name, lastName, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.error) router.replace("/dashboard");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="form-input">
      <h3>Profile</h3>
      <h1>Your Username is <br/>{session.user.email}</h1>
      <label>Name  </label>

      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>LastName</label>

      <input
        placeholder="LastName"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label>Password</label>

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req: req });
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
