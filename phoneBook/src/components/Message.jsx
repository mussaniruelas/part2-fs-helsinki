import React from "react";

function Message({ message }) {
  if (message === null) return null;
  return <div className="ok">{message}</div>;
}

export default Message;
