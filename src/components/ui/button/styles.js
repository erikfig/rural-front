import styled from 'styled-components';
export const ButtonComponent = styled.button `
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  background-color: ${({ color }) => {
    switch (color) {
        case 'yellow':
            return '#fbbf24';
        case 'red':
            return '#ef4444';
        case 'blue':
            return '#3b82f6';
        case 'gray':
            return '#6b7280';
        default:
            return '#6b7280';
    }
}};

  color: white;

  &:hover {
    background-color: ${({ color }) => {
    switch (color) {
        case 'yellow':
            return '#f59e0b';
        case 'red':
            return '#dc2626';
        case 'blue':
            return '#2563eb';
        case 'gray':
            return '#4b5563';
        default:
            return '#4b5563';
    }
}};
  }
`;
