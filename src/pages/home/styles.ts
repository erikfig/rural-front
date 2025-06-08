import styled from 'styled-components';

export const ComponentHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ComponentHomeTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ComponentHomeGrid = styled.div`
  max-width: 100%;
  display: grid;
  gap: 1rem;

  &.lg-grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    max-width: 100%;
  }

  &.lg-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 100%;
  }

  &.lg-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 100%;
  }
`;
