'use client';
import { Container, Parrafo } from './styled';
import MovieCard from './components/Cards/MovieCard';

export default function Home() {
  return (
    <main>
      <h1>SPA main page</h1>
      <MovieCard />
      <Parrafo>Hola Juli</Parrafo>
      <Container>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Container>
    </main>
  );
}
