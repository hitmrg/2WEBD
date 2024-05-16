import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useArtIdQuery() {
  return useQuery({
    queryKey: ["AllID"],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=*`
      );
      const json = await response.json();

      return json as ArtId;
    },
    placeholderData: keepPreviousData,
  });
}
