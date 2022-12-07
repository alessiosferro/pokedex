import { useGetPokemon } from '@/hooks/use-get-pokemon';

export default function Home() {
  const { data, isLoading } = useGetPokemon('bulbasaur');

  console.log(data);

  if (!data) {
    return <p>loading...</p>;
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
