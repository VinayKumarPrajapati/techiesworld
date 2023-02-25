import { useState } from "react";
const Register = () => {
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    alert("checking code"); }
  const registerForm = () => ( <form onSubmit={handleSubmit}> <div> <label>Your Contact Number</label>
  <input
  type="text"
  placeholder="Enter Contact Number"
  value={contactNumber}
  onChange={(e) => setName(e.target.value)}
  />
  </div>
  </form>   );
  return (
    <>
      <div>
        <h1>Register</h1>
      </div>
    </>
  );
};
export default Register;
