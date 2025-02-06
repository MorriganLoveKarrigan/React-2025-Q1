import { apiClient } from '@/shared/api/apiClient.ts';
import { ApiResponse } from '@/shared/api/types';
import { Character } from '@/shared/types/character.ts';
import { buildQueryString } from '@/utils/buildQueryString.ts';

interface getCharactersQuery {
  page: number;
  name: string;
}
export const getCharacters = async (query: getCharactersQuery) => {
  const parsedQuery = buildQueryString<getCharactersQuery>(query);
  return apiClient
    .get<ApiResponse<Character>>(`/character${parsedQuery}`)
    .then((response) => response.data);
};
