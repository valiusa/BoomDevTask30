import React from "react";

// styles
import ".LoginForm.module.css";

function LoginFormComponent() {
  return (
    <div>
      <form className="form">
        <div>
          <label className="label">User Name</label>
          <input type="text" name="uname" className="input" required />
        </div>
        <div>
          <label className="label">Password</label>
          <input type="password" name="pass" className="input" required />
        </div>
        <div>
          <input type="submit" className="submit" />
        </div>
      </form>
    </div>
  );
}

export default LoginFormComponent;
