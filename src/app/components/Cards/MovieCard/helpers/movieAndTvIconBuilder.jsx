import MovieIcon from '../icons/MovieIcon';
import TvAndSeriesIcon from '../icons/TvAndSeriesIcon';

export const MEDIA_TYPES = {
  movie: 'Movie',
  tv: 'TV Series',
};

const movieAndTvIconBuilder = (mediaType) => {
  const icon = MEDIA_TYPES[mediaType];
  return icon === MEDIA_TYPES.movie ? <MovieIcon /> : <TvAndSeriesIcon />;
};

export default movieAndTvIconBuilder;
