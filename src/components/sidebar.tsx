import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiSendPlaneFill, RiNftFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";

type NavItemProps = {
  link: string;
  icon: any;
  name: string;
};

const NavItem = ({ link, icon, name }: NavItemProps) => {
  return (
    <li className="w-[80%] text-gray-600 dark:text-gray-300 font-semibold flex pb-2">
      <Link
        href={link}
        className="flex justify-center sm:justify-start items-center py-2"
      >
        {icon}
        <span className="hidden md:flex text-sm ml-3">{name}</span>
      </Link>
    </li>
  );
};

const navSec1 = [
  {
    link: "/dashboard",
    icon: <FiHome size={24} />,
    name: "Home",
  },
  {
    link: "/explore",
    icon: <MdOutlineExplore size={24} />,
    name: "Explore",
  },
];

const navSec2 = [
  {
    link: "/nft",
    icon: <RiNftFill size={24} />,
    name: "ERC 721",
  },
  {
    link: "/airdrop",
    icon: <RiSendPlaneFill size={24} />,
    name: "Airdrop",
  },
];

const navSec3 = [
  {
    link: "/profile",
    icon: <CgProfile size={24} />,
    name: "Profile",
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed min-h-[100vh] w-[45] md:w-[180px] border-r border-gray-400 py-5">
      <div className="px-3 justify-start items-center">
        <Link href="/" className="flex justify-start items-center mt-2 mb-8">
          <Image
            src="/tokenup.png"
            width="30"
            height="30"
            alt="TokenUp"
            className="mr-3"
          />
          <span className="hidden md:flex font-bold text-xl">TokenUp</span>
        </Link>
        <ul className="flex flex-col items-center justify-center w-full">
          {navSec1.map((item) => (
            <NavItem
              key={item.link}
              link={item.link}
              icon={item.icon}
              name={item.name}
            />
          ))}
          <hr className="w-full my-2 border-gray-400" />
          {navSec2.map((item) => (
            <NavItem
              key={item.link}
              link={item.link}
              icon={item.icon}
              name={item.name}
            />
          ))}
          <hr className="w-full my-2 border-gray-400" />
          {navSec3.map((item) => (
            <NavItem
              key={item.link}
              link={item.link}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
