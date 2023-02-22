import dye from "../../assets/dye.png";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <div className="greeting">
      <h1
        style={{
          backgroundImage: `url(${dye})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "55vh",
        }}
      >
        Play Dead
      </h1>
    </div>
  );
};

export default Navbar;
