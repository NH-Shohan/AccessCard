"use client";

export default function UserProfile({ params }) {
  const { name } = params;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {name.replace("-", " ")}</h1>
      <p>This is your personalized profile page based on your NFC card.</p>
    </div>
  );
}
