export const buildQueryString = <T>(params?: T): string => {
  if (!params) return '';

  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, value.toString());
    }
  });

  return query.toString() ? `?${query.toString()}` : '';
};
