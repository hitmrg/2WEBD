import { useQuery } from "@tanstack/react-query";

export function useDepartmentAllQuery() {
  return useQuery({
    queryKey: ["ALLD"],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/departments`
      );
      const json = await response.json();

      return json as AllD;
    },
  });
}
