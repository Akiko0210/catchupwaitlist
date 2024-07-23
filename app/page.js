"use client";

import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function IconProfile(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && username) {
      setMessage(`Thank you for signing up, ${username}!`);
      // Here you can add your code to handle the signup logic, e.g., sending data to your backend
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="rounded-md border-white bg-white p-2 mb-4">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#63E6BE] h-4 mr-2"
            />
            <input
              className="border-none focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="rounded-md border-white bg-white p-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#63E6BE] h-4 mr-2"
            />
            <input
              className="border-none focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
            />
          </div>
          <button
            className="text-white text-center w-full mt-2 border-white border-2 p-2 opacity-75 hover:opacity-100 3s"
            type="submit"
          >
            Join the waitlist
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </main>
  );
}
