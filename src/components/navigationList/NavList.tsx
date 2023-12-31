import { Link } from "react-router-dom";
import images from "../../services/Images";
import { motion } from "framer-motion";

export const list = ["HTML", "CSS", "JavaScript", "Accessibility"];

const NavList = () => {
  return (
    <motion.ul
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-3 md:gap-5 flex-1 max-w-[660px]"
    >
      {list.map((items, index) => (
        <Link to={`/${items}`} key={items} state={{ index }}>
          <li className="flex items-center bg-white p-5 rounded-[12px] gap-[15px] md:gap-[30px] shadow-md md:rounded-[24px]">
            <img
              className="p-[5px] w-10 h-10 bg-[#f4f6fa]"
              src={images[index]}
              alt={items + " icon"}
            />
            <p className="text-lg text-[#313E51] font-medium md:text-[28px]">
              {items}
            </p>
          </li>
        </Link>
      ))}
    </motion.ul>
  );
};

export default NavList;
