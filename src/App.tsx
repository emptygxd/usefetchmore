import { useFetchMore } from "./shared/hooks/useFetchMore";

type Products = {
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

function App() {
  const { data, error, isLoading, fetchMore } = useFetchMore({
    apiUrl: "https://fakestoreapi.com/products",
    limit: 4,
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data.map((item: Products) => (
        <div key={item.id}>{item.title}</div>
      ))}

      <button onClick={fetchMore}>Load more</button>
    </div>
  );
}

export default App;
