import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.article`
  width: 192px;
`;

export const MovieHeader = styled.section`
  display: flex;
  border-radius: 16px;
`;

export const MovieImage = styled(Image)`
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

export const MovieInfo = styled.section`
  display: flex;
`;

export const MovieTitle = styled.h1`
  font-size: 1rem;
`;
