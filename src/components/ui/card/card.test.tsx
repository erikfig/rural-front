import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { Card } from './card';

describe('Card Component', () => {
  it('renders correctly with children', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card>
          <p>Test Content</p>
        </Card>
      </ThemeProvider>
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the correct variant style', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Card variant="secondary">
          <p>Secondary Card</p>
        </Card>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle(`background-color: ${theme.colors.secondary}`);
  });
});
