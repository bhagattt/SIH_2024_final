import React, { useState } from "react";

function WannaHelp() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send email or perform other actions)
    console.log("Email:", email);
  };

  return (
    <section className="wanna-help">
      <h2>Wanna Help?</h2>
      <form onSubmit={handleSubmit}>
        <div className="wanna-help-email">
          <p>Enter your email:</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="wanna-help-submit">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </section>
  );
}

export default WannaHelp;
