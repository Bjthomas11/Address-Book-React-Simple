// import react in
import React, { Component } from "react";
// import contact component with the props return
import Contact from "./contact";

// export class with stateful component
export default class AdressBook extends Component {
  // constructor always go with a class function
  constructor(props) {
    // call super if we have a constructor
    super(props);
    // create state object with array of objects with data
    this.state = {
      contacts: [
        {
          name: "Brian",
          photo: "https://api.adorable.io/avatars/64/alice%40thinkful.com",
          address: "1234 Allen,tx"
        },
        {
          name: "Patrick",
          photo: "https://api.adorable.io/avatars/64/bob%40thinkful.com",
          address: "700 100th circle"
        },
        {
          name: "Thinkful",
          photo: "https://api.adorable.io/avatars/64/carol%40thinkful.com",
          address: "3 hilltop street"
        }
      ]
    };
  }

  // render the data
  render() {
    // create variable the use state to map through data with index then use Contact component JSX wiht key index pair and index index pair and use spread operator for each of the cantact
    const contacts = this.state.contacts.map((contact, index) => (
      <Contact key={index} index={index} {...contact} />
    ));
    // return a div that holds the contacts object
    return <div className="address-book">{contacts}</div>;
  }
}
