import { NavLink } from "react-router-dom";

const items = [
  { key: "gadgets", label: <NavLink to="/gadgets">Gadgets</NavLink> },
  { key: "kids",    label: <NavLink to="/kids">Kids</NavLink> },
  { key: "sports",  label: <NavLink to="/sports">Sports</NavLink> },
  { key: "orders",  label: <NavLink to="/orders">Orders</NavLink> },
];

export default items;