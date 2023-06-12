import React from 'react';
import {
  MovieContainer,
  MovieHeader,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieInfoTypography,
} from './MovieCard.styled';
import Bookmark from '../../Bookmark';
import { DUMMY_IMAGE } from './dummyImage';
import { useMoviesAndSeries } from '@/app/provider';

export default function MovieCard({
  year,
  type,
  restriction,
  title = '',
  imageSrc = '',
}) {
  const safeAlt = title || 'UNKNOWN';
  const safeImg = imageSrc || DUMMY_IMAGE;

  const { movies } = useMoviesAndSeries();

  return (
    <MovieContainer>
      <MovieHeader>
        <MovieImage src={safeImg} alt={safeAlt} width={192} height={100} />
        <Bookmark />
      </MovieHeader>
      <MovieInfo>
        <MovieInfoTypography> {year && year} 2019 ·&nbsp;</MovieInfoTypography>
        <MovieInfoTypography> {type && type} Movie ·&nbsp;</MovieInfoTypography>
        <MovieInfoTypography>
          {restriction && restriction} PG
        </MovieInfoTypography>
      </MovieInfo>
      <MovieTitle>Apocalypsis Now!</MovieTitle>
    </MovieContainer>
  );
}
