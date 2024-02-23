import { Platform } from "../entities/Platform";
import APIClient from "./api-client";

export default new APIClient<Platform>("/platforms/lists/parents");
