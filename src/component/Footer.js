import React from "react";

function Footer() {
  return (
    <div className="w-5/6 lg:w-full fixed bottom-0 flex justify-center">
      <span className="raleway-regular text-gray-500">
        created by{" "}
        <a
          href="https://portfolio-muhammadkevinpf.vercel.app/"
          rel="nooopener noreferrer"
          className="text-gray-700 raleway-bold underline"
        >
          muhammadkevinpf
        </a>{" "}
        - devchallenges.io
      </span>
    </div>
  );
}

export default Footer;
