import { useQuery } from "@tanstack/react-query";

export function useDepartmentIdSearchQuery(department: string) {
  return useQuery({
    queryKey: ["DEPARTMENT", department],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/departments/?displayName=${department}`
      );
      const json = await response.json();

      return json as DepartmentId;
    },
  });
}
