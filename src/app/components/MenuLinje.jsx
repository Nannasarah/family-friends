import { IoMdNotificationsOutline } from "react-icons/io";
import { LuHouse } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

const MenuLinje = () => {
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-15 flex justify-around bg-red-200/50 py-4 pb-10 backdrop-blur-md">
      <LuHouse size={25} color="white" />
      <FaRegStar size={25} color="white" />
      <IoChatbubbleOutline size={25} color="white" />
      <BsPerson size={25} color="white" />
    </nav>
  );
};

export default MenuLinje;
