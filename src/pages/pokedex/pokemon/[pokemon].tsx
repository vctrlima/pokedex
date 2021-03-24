import { useRouter } from "next/router";
import Pokemon from "../../../components/Pokemon";

const PokemonView = () => {
    const router = useRouter();
    const { pid } = router.query;

    return (
        <div>
            <Pokemon />
            <p>Post: {pid}</p>
        </div>
    );
};

export default PokemonView;
