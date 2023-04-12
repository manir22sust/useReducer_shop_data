import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <div className="titleWrapper">
          <h1>useReducer Hook</h1>
        </div>
        <div className="linksWrapper">
          <Link to="/products" style={{ marginRight: "40px" }}>
            Products
          </Link>
          <Link to="/cart">Cart</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};
