import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaGamepad,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import {
  SiApplearcade,
  SiAtari,
  SiCommodore,
  SiNintendo,
  SiSega,
} from "react-icons/si";

import { MdPhoneIphone } from "react-icons/md";

import { Platform } from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: any } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    web: BsGlobe,
    atari: SiAtari,
    "commodore-amiga": SiCommodore,
    sega: SiSega,
    "3do": FaGamepad,
    "neo-geo": SiApplearcade,
  };

  return (
    <HStack spacing={2}>
      {platforms.map((platform) => {
        const PlatformIcon = iconMap[platform.slug];
        return <Icon as={PlatformIcon} key={platform.id} />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
