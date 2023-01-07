import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="https://airbnb-experience-clone-ten.vercel.app/airbnb-pics.png"
        className="hero--photo"
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home. Get exclusive coverage of all the homes in Nairobi
        County. This with uninterrupted power supply, unlimited gym membership,
        access to bookclubs and official wear. 24hour security is guaranteed for
        all guests.
      </p>
    </section>
  );
}
