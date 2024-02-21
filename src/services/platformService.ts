import { Platform } from "../hooks/usePlatforms";
import APIClient from "./api-client";

export default new APIClient<Platform>("/platforms/lists/parents");
