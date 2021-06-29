import React from "react";
import "./button.css";
export default function Button(props) {
  return (
    <div className="button" data-testid="buttontestid">
      On{props.label}
    </div>
  );
}
