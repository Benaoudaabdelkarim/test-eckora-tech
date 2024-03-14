import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function SideNavbar() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          Open Menu{" "}
          <FontAwesomeIcon icon={faAngleDown} className="w-5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions" className="bg-white w-full">
        <DropdownItem key="home" href="/home">
          Home
        </DropdownItem>
        <DropdownItem key="about" href="/about">
          About
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
