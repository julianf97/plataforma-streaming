'use client';
import React from 'react';
import SearchBar from './components/SearchBar';
import './globals.css';
import MovieCard from './components/Cards/MovieCard/MovieCard';

export default function App({ children }) {
  return (
    <main>
      <SearchBar />
      <MovieCard
        type="tv"
        imageSrc="/zPmXiPlB9YXT9dtSHzZHQUcpekw.jpg"
        year="2019"
        title="Rápido y furioso V"
        restriction={{ adult: true }}
      />
      <MovieCard
        type="movie"
        imageSrc="/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg"
        year="2020"
        title="Mi vecino totoro"
      />
      {children}
    </main>
  );
}
