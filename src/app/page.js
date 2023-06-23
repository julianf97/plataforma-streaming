"use client"
import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import "./globals.css";

export default function App({ children }) {
  return (
    <main>
      <Navbar/>
      {children}
    </main>
  );
}
