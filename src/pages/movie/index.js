
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        setLoading(true);
        setError(false);

        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Não foi possível encontrar o filme.");
                }

                return response.json();
            })
            .then((data) => {
                setMovie(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar filme:", error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id, KEY]);

    if (loading) {
        return <h2>Carregando filme...</h2>;
    }

    if (error || !movie) {
        return (
            <div>
                <h2>Não foi possível carregar este filme.</h2>
                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <nav>
                <h1>Movie</h1>
            </nav>

            <img
                className="img_movie"
                src={
                    movie.poster_path
                        ? `${imagePath}${movie.poster_path}`
                        : "https://placehold.co/500x750?text=Sem+Imagem"
                }
                alt={movie.title}
            />

            <div className="container">
                <h1>{movie.title}</h1>

                <h3>Data de lançamento: {movie.release_date || "Não informada"}</h3>

                <div className="descricao">
                    <h4>Descrição:</h4>
                    <p className="movie-desc">
                        {movie.overview || "Sinopse não disponível."}
                    </p>
                </div>

                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>
        </div>
    );
};

export default Movie;
