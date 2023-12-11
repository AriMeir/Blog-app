import { Link } from "react-router-dom";
function Missing() {
  return (
    <main className="Missing">
          <h2>Post Not Found</h2>
          <p>well, thats disappointing</p>
          <p>
          <Link to='/'>Visit Our Home page</Link>
          </p>
    </main>
  );
}

export default Missing;