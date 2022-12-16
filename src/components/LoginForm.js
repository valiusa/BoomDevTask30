import React from "react";

// styles
import styles from ".LoginForm.module.css";

function LoginFormComponent() {
  return (
    <div>
      <form className={styles.form}>
        <div>
          <label className={styles.label}>User Name</label>
          <input type="text" name="uname" className={styles.input} required />
        </div>
        <div>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="pass"
            className={styles.input}
            required
          />
        </div>
        <div>
          <input type="submit" className={styles.submit} />
        </div>
      </form>
    </div>
  );
}

export default LoginFormComponent;
