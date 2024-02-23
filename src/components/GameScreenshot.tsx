import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
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
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
