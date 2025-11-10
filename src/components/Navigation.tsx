import { NavLink } from "./NavLink";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <div className="flex gap-4 text-sm">
        <NavLink
          to="/"
          className="text-muted-foreground hover:text-gold transition-colors"
          activeClassName="text-gold font-semibold"
        >
          Home
        </NavLink>
        <NavLink
          to="/weather"
          className="text-muted-foreground hover:text-gold transition-colors"
          activeClassName="text-gold font-semibold"
        >
          Weather
        </NavLink>
      </div>
    </nav>
  );
};
