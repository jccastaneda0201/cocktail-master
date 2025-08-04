import { useLoaderData, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (searchTerm) => ({
  queryKey: ['search', searchTerm || 'a'],
  queryFn: async () => {
    const term = searchTerm || 'a';
    const response = await axios.get(`${cocktailSearchUrl}${term}`);
    return response.data.drinks;
  },
});

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get('page')) || 1;
  const itemsPerPage = 6;

  const handleChange = (event, value) => {
    setSearchParams({ search: searchTerm, page: value });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDrinks = drinks?.slice(startIndex, endIndex);

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={paginatedDrinks} />
      {drinks && drinks.length > itemsPerPage && (
        <Stack spacing={2} sx={{ mt: 4, alignItems: 'center' }}>
          <Pagination
            count={Math.ceil(drinks.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChange}
            variant="outlined"
            color="error"
          />
        </Stack>
      )}
    </>
  );
};

export default Landing;
