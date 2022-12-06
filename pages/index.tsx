import {useGetPokemonDetail} from "../src/hooks/use-get-pokemon-list";


export default function Home() {

  const { data, isLoading } = useGetPokemonDetail("bulbasaur");

  if (!data) {
    return <p>loading...</p>
  }

  return (
    <>
      <ul>
         {data[0].pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text}
      </ul>
    </>
  )
}
