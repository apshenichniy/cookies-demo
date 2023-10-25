"use client";

const ClientComponent = () => {
  const cookies = document.cookie;

  return <div>Client cookies: {cookies}</div>;
};

export { ClientComponent };
