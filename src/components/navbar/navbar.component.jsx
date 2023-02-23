import leather from "../../assets/leather.png";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <div>
      <h1
      className='title'
        style={{
          backgroundImage: `url(${leather})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "70vh",
        }}
      >
        Play Dead
      </h1>
    </div>
  );
};

export default Navbar;
