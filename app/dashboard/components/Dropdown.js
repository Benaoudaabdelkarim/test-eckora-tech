import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function DropdownComponent({ onChildEvent, ...props }) {

  function handleClick(name) {
    onChildEvent(name)
  }
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="border text-xs rounded-md py-1 px-2 font-medium text-[#1D7AFC]">
          {props.title}
          <FontAwesomeIcon icon={faAngleDown} className="w-4 text-[8px]" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions" className="bg-white w-full">
        {
          props.buttons.map((item) => (
            <DropdownItem key={item.name} onClick={() => handleClick(item.name)} className="text-xs px-2 py-1 cursor-pointer">
                {item.name}
            </DropdownItem>
          ))
        }
      </DropdownMenu>
    </Dropdown>
  );
}
