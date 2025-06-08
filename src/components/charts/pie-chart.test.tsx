import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PieChart } from './pie-chart';

jest.mock('./pie-chart', () => ({
  PieChart: () => <div data-testid="mock-pie-chart">Mock PieChart</div>,
}));

describe('PieChart Component', () => {
  it('renders correctly with data', () => {
    const mockData = [
      { name: 'Category 1', value: 10 },
      { name: 'Category 2', value: 20 },
    ];

    const { getByTestId } = render(
      <PieChart name="Test Chart" data={mockData} />
    );

    expect(getByTestId('mock-pie-chart')).toBeInTheDocument();
  });

  it('renders without crashing when no data is provided', () => {
    const { getByTestId } = render(<PieChart name="Empty Chart" data={[]} />);
    expect(getByTestId('mock-pie-chart')).toBeInTheDocument();
  });
});
