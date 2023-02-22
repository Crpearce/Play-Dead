import "./navbar.styles.css";
import dye from '../../assets/dye.png'
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
