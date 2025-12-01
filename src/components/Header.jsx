import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <h1 className="page-title">
        Yuvraj Singh Rajput's Yawning Yeti || ITIS 3135
      </h1>
      <nav>
        <Link className="normal-link" to="/">Home</Link>
        {" || "}
        <Link className="normal-link" to="/introduction">Introduction</Link>
        {" || "}
        <Link className="normal-link" to="/contract">Contract</Link>
        {" || "}
        <Link className="normal-link" to="/students">Students</Link>
      </nav>
    </header>
  );
}
