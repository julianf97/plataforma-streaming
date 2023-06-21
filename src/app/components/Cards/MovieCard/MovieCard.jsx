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
import movieAndTvIconBuilder, {
  MEDIA_TYPES,
} from './helpers/movieAndTvIconBuilder';
import ageRateBuilder from './helpers/ageRateBuilder';

export default function MovieCard({
  year,
  type,
  restriction = { adult: false },
  title = '',
  imageSrc = '',
}) {
  const safeAlt = title || 'UNKNOWN';
  const safeImg = imageSrc || DUMMY_IMAGE;

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';
  const icon = movieAndTvIconBuilder(type);

  const ageRate = ageRateBuilder(restriction);

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
        <MovieInfoTypography>{restriction && ageRate} </MovieInfoTypography>
      </MovieInfo>
      <MovieTitle>{title && title}</MovieTitle>
    </MovieContainer>
  );
}
