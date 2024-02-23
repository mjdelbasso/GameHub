import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
