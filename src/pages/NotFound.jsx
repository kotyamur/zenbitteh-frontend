import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h2>Page Not Found</h2>
      <p>
        Go to <Link to="/">main</Link> page
      </p>
    </div>
  );
}
