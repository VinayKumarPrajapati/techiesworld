import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div>
        <h1>Register</h1>
      </div>
    </>
  );
};
export default Register;
