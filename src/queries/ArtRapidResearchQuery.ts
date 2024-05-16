import { useQuery } from "@tanstack/react-query";

export function useArtRapidResearchQuery(object: string) {
  return useQuery({
    queryKey: ["ART", object],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${object}`
      );
      const json = await response.json();

      return json as ArtId;
    },
  });
}
