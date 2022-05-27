import {
    createClient,
    createCurrentUserHook,
    createImageUrlBuilder
} from "next-sanity";

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "q3xhx7vy",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production"
};

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const useCurrentUser = createCurrentUserHook(config);