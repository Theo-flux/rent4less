import {
    createClient,
    createCurrentUserHook,
} from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "q3xhx7vy",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production"
};

export const sanityClient = createClient(config);
export const urlFor = (source) => imageUrlBuilder(config).image(source)
export const useCurrentUser = createCurrentUserHook(config);