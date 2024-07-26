"use client";

import { addUser } from "@/server/action";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Input = ({ icon, placeholder, setState, state }) => {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className={`flex items-center rounded-md bg-[#14141A] py-2 mb-4 ${
        focus || state != "" ? "opacity-100" : "opacity-50"
      }`}
    >
      <FontAwesomeIcon icon={icon} className="text-grey h-4 ml-4 mr-2 " />
      <input
        className="border-none focus:outline-none bg-[#14141A] w-full"
        value={state}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email) && name) {
      addUser({ email, name });
      setMessage(`Thank you for signing up, ${name}!`);
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-white">
      <div
        className="text-4xl lg:text-6xl mt-32 font-light text-center"
        style={styles.gradientText}
      >
        Join the waitlist for CatchUp
      </div>
      <div className="w-[400px] lg:w-[600px] text-center mb-20 mt-8 text-[#A3B9C9]">
        Don&apos;t miss your chance to be one of the first to try CatchUp. Sign
        up now to secure your spot and receive exclusive early access when we
        launch.
      </div>
      <div className="w-[400px]">
        <form onSubmit={handleSubmit}>
          <Input
            icon={faUser}
            state={name}
            setState={setName}
            placeholder={"Full name..."}
          />
          <Input
            icon={faEnvelope}
            state={email}
            setState={setEmail}
            placeholder={"Email..."}
          />
          <button
            className="text-white rounded-md text-center w-full mt-2 border-white border-[1px] p-2 opacity-75 hover:opacity-100"
            type="submit"
          >
            Catch Up!
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </main>
  );
}

const styles = {
  gradientText: {
    background: "linear-gradient(to right, #007BFF, #00FF88)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};
