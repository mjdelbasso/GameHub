import { Image, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";
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
      {selectedImage && (
        <Modal isOpen={true} onClose={closeImage} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody p={0}>
              <Image src={selectedImage} alt="Game screenshot" />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default GameScreenshot;
