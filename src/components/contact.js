// import react in
import React from "react";
// import contact component css
import "./contact.css";

// export function with passing props
export default function Contact(props) {
  // return a section with id that matches props index, create img tag inside with src and alt attr, create h2 with props name then create address with props address
  return (
    <section id={`contact-${props.index}`} className="contact">
      <img
        className="contact-photo"
        src={props.photo}
        alt={`${props.name}'s pic`}
      />
      <h2 className="contact-name">{props.name}</h2>
      <address className="contact-address">{props.address}</address>
    </section>
  );
}
