import styled from 'styled-components';

interface CardComponentProps {
  variant?: 'primary' | 'secondary';
}

export const CardComponent = styled.div<CardComponentProps>`
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  background-color: ${({ variant, theme }) => (variant && theme.colors[variant]) || '#fff'};
  color: ${({ variant, theme }) => (variant && theme.colors[variant]) ? '#fff': 'inherit'};
  padding: 16px;
`;

export const CardHeaderComponent = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #e5e7eb;
  h4 {
    color: #9ca3af;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardContentComponent = styled.div`
  
`;
