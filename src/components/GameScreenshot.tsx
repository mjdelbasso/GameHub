import { Image, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { useState } from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((screenshot) => (
          <Image
            _hover={{
              transform: "scale(1.03)",
              transition: "transform 0.15s ease-in",
            }}
            key={screenshot.id}
            src={screenshot.image}
            alt="Game screenshot"
            onClick={() => openImage(screenshot.image)}
            cursor="pointer"
          />
        ))}
      </SimpleGrid>

      <Modal isOpen={selectedImage !== null} onClose={closeImage}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={selectedImage || ""} alt="Game screenshot" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GameScreenshot;
