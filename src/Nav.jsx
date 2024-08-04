import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div className="sidenav">
        <Link to="/"> Home </Link>
        <Link to="/practice"> Practice </Link>
      </div>
    </>
  );
};
