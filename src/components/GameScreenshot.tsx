import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((screenshot, index) => (
          <Image
            _hover={{
              transform: "scale(1.03)",
              transition: "transform 0.15s ease-in",
            }}
            key={screenshot.id}
            src={screenshot.image}
            alt="Game screenshot"
            onClick={() => openImage(index)}
            cursor="pointer"
          />
        ))}
      </SimpleGrid>
      {selectedImageIndex !== null && (
        <Modal isOpen={true} onClose={closeImage} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalBody p={0}>
              <Carousel
                showArrows={true}
                showThumbs={false}
                selectedItem={selectedImageIndex}
                onClickThumb={() => closeImage()}
              >
                {data?.results.map((screenshot) => (
                  <div key={screenshot.id}>
                    <img src={screenshot.image} alt="Game screenshot" />
                  </div>
                ))}
              </Carousel>
            </ModalBody>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default GameScreenshot;
