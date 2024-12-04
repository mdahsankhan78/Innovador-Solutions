import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faICursor } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "UI / UX",
    link: 'ui',
  },
  {
    title: "Web Development",
    link: 'web',
  },
  {
    title: "Mobile App Development",
    link: 'mobile',
  },
  {
    title: "IT Consultancy",
    link: 'it',
  },
  {
    title: "SaaS & Cloud Computing",
    link: 'cloud',
  },
  {
    title: "Digital Marketing",
    link: 'digital',
  },
];

export function Dropdown() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Link
          to={'services'}
          variant="text"
          className="flex items-center gap-3 text-lg font-bold tracking-normal"
        >
          Services
          <FontAwesomeIcon
            icon={faChevronDown}
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform duration-500 ${openMenu ? "rotate-180" : ""
              }`}
          />
        </Link>
      </MenuHandler>
      <MenuList className="hidden w-[36rem] mt-5 grid-cols-7 gap-3 overflow-visible lg:grid rounded-none">
        <Card

          shadow={false}
          className="col-span-3 flex h-full w-full items-center justify-center rounded-none p-4 bg-[url(/images/Services1.jpg)]"
        >
        </Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ title, link }) => (
            <a href="#" key={title}>
              <MenuItem>
                <Link to={'services'} variant="h6" color="blue-gray" className="mb-1">
                  {title}
                </Link>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}