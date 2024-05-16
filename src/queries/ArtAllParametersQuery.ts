import { useQuery } from "@tanstack/react-query";

export function useArtDeepSearchQuery(
  department: number,
  geographic: string,
  object: string,
  start_date: number,
  end_date: number,
  isHighLight: boolean,
  artworkImage: boolean,
  isOnView: boolean,
  artistOrCulture: boolean
) {
  return useQuery({
    queryKey: [
      "DEEP",
      {
        department,
        geographic,
        object,
        start_date,
        end_date,
        isHighLight,
        artworkImage,
        isOnView,
        artistOrCulture,
      },
    ],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${department}&geoLocation=${geographic}&dateBegin=${start_date}&dateEnd=${end_date}&isHighlight=${isHighLight}&hasImages=${artworkImage}&isOnView=${isOnView}&artistOrCulture=${artistOrCulture}&q=${object}`
      );
      const json = await response.json();

      return json as ArtId;
    },
  });
}
