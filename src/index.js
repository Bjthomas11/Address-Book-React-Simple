// import react in
import React from "react";
// import react dom (virtual dom)
import ReactDOM from "react-dom";
// import main component
import AddressBook from "./components/address-book";
// import main css file
import "./index.css";

// render main component with no props and where to render the component
ReactDOM.render(<AddressBook />, document.getElementById("root"));
