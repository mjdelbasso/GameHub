import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px"
          objectFit="cover"
          _hover={{ transform: "scale(1.1)", transition: "transform 0.5s" }}
        />
      </Link>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
