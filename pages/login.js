import { useEffect, useState } from "react";
import { Box } from "reflexbox";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token !== undefined && token !== "" && token !== null) {
      router.push("/Articles");
    }
  });
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const callApi = async (event) => {
    event.preventDefault();
    const user = {
      identifier: identifier,
      password: password,
    };
    const login = await fetch(`http://localhost:1337/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const loginResponse = await login.json();
    localStorage.setItem("jwt", loginResponse.jwt);
    router.push("/Articles");
    console.log(loginResponse);
  };
  return (
    <>
      <Box variant="container">
        <Box as={"h2"} my={40}>
          you need to login to access the articles
        </Box>
        <form>
          <input type="email" onChange={(e) => setIdentifier(e.target.value)} />
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={callApi}>Login</button>
        </form>
      </Box>
    </>
  );
};
export default Login;
