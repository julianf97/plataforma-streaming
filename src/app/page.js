'use client';
import React from 'react';
import SearchBar from './components/SearchBar';
import './globals.css';
import MovieCard from './components/Cards/MovieCard/MovieCard';
import { MoviesAndSeriesProvider, useMoviesAndSeries } from './provider';

export default function App({ children }) {
  return (
    <MoviesAndSeriesProvider>
      <main>
        <SearchBar />
        <MovieCard />
        {children}
      </main>
    </MoviesAndSeriesProvider>
  );
}
