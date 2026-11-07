
import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    padding: 2rem;
    background-color: #101014;
    color: #ffffff;

    h1 {
        text-align: center;
        margin: 2rem 0 3rem;
        font-size: 2.5rem;
        color: #e50914;
        letter-spacing: 2px;
    }

    h2 {
        margin: 2rem 0;
        color: #ffffff;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 3rem;
    }

    input {
        width: 100%;
        max-width: 400px;
        padding: 14px 18px;
        border: 1px solid #444;
        border-radius: 8px;
        background-color: #222229;
        color: #ffffff;
        font-size: 16px;
        outline: none;
    }

    input:focus {
        border-color: #e50914;
    }

    form button {
        padding: 14px 22px;
        border: none;
        border-radius: 8px;
        background-color: #e50914;
        color: #ffffff;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
    }

    form button:hover {
        background-color: #b80710;
    }

    @media (max-width: 600px) {
        padding: 1rem;

        h1 {
            font-size: 2rem;
        }

        form {
            flex-direction: column;
        }

        input {
            box-sizing: border-box;
        }
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 1rem;
    background-color: #1d1d25;
    border-radius: 12px;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 25px rgba(229, 9, 20, 0.2);
    }

    img {
        width: 100%;
        max-width: 220px;
        aspect-ratio: 2 / 3;
        object-fit: cover;
        border-radius: 8px;
    }

    span {
        font-weight: bold;
        font-size: 1rem;
        text-align: center;
        min-height: 40px;
    }

    a {
        text-decoration: none;
        transition: transform 0.3s;
    }

    a:hover {
        transform: scale(1.05);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.8rem 2.5rem;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    background-color: #e50914;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 250ms;

    &:hover {
        background-color: #b80710;
    }
`;
