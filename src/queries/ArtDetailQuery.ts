import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useArtDetailQuery(id: number) {
  return useQuery({
    queryKey: ["ART", id],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      );

      const json = await response.json();

      return json as Artwork;
    },
    placeholderData: keepPreviousData,
  });
}
