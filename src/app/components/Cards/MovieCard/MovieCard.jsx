import React from 'react';
import {
  MovieContainer,
  MovieHeader,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieInfoTypography,
} from './MovieCard.styled';
import Bookmark from './icons/Bookmark';
import { DUMMY_IMAGE } from './dummyImage';
import { useMoviesAndSeries } from '@/app/provider';
import movieAndTvIconBuilder, {
  MEDIA_TYPES,
} from './helpers/movieAndTvIconBuilder';
import ageRate from './helpers/ageRate';

export default function MovieCard({
  year,
  type,
  restriction = { adult: false },
  title = '',
  imageSrc = '',
}) {
  const safeAlt = title || 'UNKNOWN';
  const safeImg = imageSrc || DUMMY_IMAGE;

  const { movies } = useMoviesAndSeries();
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';
  const icon = movieAndTvIconBuilder(type);

  const ageRateRestriction = ageRate(restriction);

  return (
    <MovieContainer>
      <MovieHeader>
        <MovieImage
          src={`${BASE_IMG_URL}${imageSrc}` || safeImg}
          alt={safeAlt}
          width={192}
          height={100}
        />
        <Bookmark />
      </MovieHeader>
      <MovieInfo>
        <MovieInfoTypography> {year && year} ·&nbsp;</MovieInfoTypography>
        <MovieInfoTypography>
          {' '}
          {type && icon} {type && MEDIA_TYPES[type]} ·&nbsp;
        </MovieInfoTypography>
        <MovieInfoTypography>
          {restriction && ageRateRestriction}{' '}
        </MovieInfoTypography>
      </MovieInfo>
      <MovieTitle>{title && title}</MovieTitle>
    </MovieContainer>
  );
}



