import { useFetchMore } from './shared/hooks/useFetchMore';

type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

const URL = 'https://fakestoreapi.com/products';

function App() {
  const {
    data,
    error,
    isLoading,
    fetchMore,
    limitState: limit,
  } = useFetchMore({ apiUrl: URL, limit: 4 });

  return (
    <div>
      <h1>useFetchMore</h1>
      {error && <p>{error}</p>}

      {data.map((item: ProductType) => (
        <p key={item.id}>{item.title}</p>
      ))}

      {isLoading && <p>Loading...</p>}

      <button disabled={isLoading || limit >= 20} onClick={fetchMore}>
        Load more
      </button>
    </div>
  );
}

export default App;
