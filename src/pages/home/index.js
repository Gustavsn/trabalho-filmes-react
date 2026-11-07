import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        const url = searchTerm
            ? `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${encodeURIComponent(searchTerm)}`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results || []);
            })
            .catch((error) => {
                console.error("Erro ao buscar filmes:", error);
                setMovies([]);
            });
    }, [KEY, searchTerm]);

    function handleSearch(event) {
        event.preventDefault();
        setSearchTerm(searchInput.trim());
    }

    function clearSearch() {
        setSearchInput("");
        setSearchTerm("");
    }

    return (
        <Container>
            <h1>Movies</h1>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Digite o nome de um filme..."
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                />

                <button type="submit">Pesquisar</button>

                {searchTerm && (
                    <button type="button" onClick={clearSearch}>
                        Limpar
                    </button>
                )}
            </form>

            {searchTerm && <h2>Resultados para: {searchTerm}</h2>}

            <MovieList>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Movie key={movie.id}>
                            <img
                                src={
                                    movie.poster_path
                                        ? `${imagePath}${movie.poster_path}`
                                        : "https://placehold.co/500x750?text=Sem+Imagem"
                                }
                                alt={movie.title}
                            />

                            <span>{movie.title}</span>

                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    ))
                ) : (
                    <p>Nenhum filme encontrado.</p>
                )}
            </MovieList>
        </Container>
    );
}

export default Home;