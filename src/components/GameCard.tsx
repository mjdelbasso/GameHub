import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import Game from "../entities/Game";
import GameDetailPage from "./GameDetails";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { slug } = game;

  const showDetails = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          onClick={showDetails}
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
      <Modal isOpen={isModalOpen} onClose={closeModal} size="6xl">
        <ModalOverlay
          style={{
            backgroundColor: "rgba(0, 0, 0, .8)",
            transition: "background-color 0.3s ease-in-out",
          }}
        />
        <ModalContent style={{ backgroundColor: "grey.500" }}>
          <ModalHeader>{game.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GameDetailPage slug={slug} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GameCard;
