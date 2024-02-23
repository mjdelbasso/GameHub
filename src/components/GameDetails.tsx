import {
  GridItem,
  Heading,
  SimpleGrid,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import GameScreenshot from "./GameScreenshot";
import GameTrailer from "./GameTrailer";
import useGame from "../hooks/useGame";

interface Props {
  slug: string;
}

const GameDetails = ({ slug }: Props) => {
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} padding={2}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <Spacer h={2} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <Spacer h={2} />
          <GameScreenshot gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetails;
