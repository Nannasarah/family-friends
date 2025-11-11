import { IoMdNotificationsOutline } from "react-icons/io";

const header = () => {
  return (
    <div className="flex max-w-[380px] items-center justify-between p-5 px-8">
      <h1 className="font-bold text-red-300">FamilyFriends</h1>
      <IoMdNotificationsOutline size={30} color="black" />
    </div>
  );
};

export default header;
