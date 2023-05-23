"use client"
import React from 'react';
import SearchBar from './components/SearchBar';
import "./globals.css"
import MovieCard from './components/Cards/MovieCard/MovieCard';

export default function App({ children }) {
  return (
    <main>
        <SearchBar/>
        <MovieCard/>
      {children}
    </main>
  );
}
