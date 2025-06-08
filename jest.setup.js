require('@testing-library/jest-dom');

// Mock do método getContext para evitar erros relacionados ao canvas
HTMLCanvasElement.prototype.getContext = jest.fn();

// Mock para dimensões do DOM
Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
  configurable: true,
  value: 1000,
});

Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
  configurable: true,
  value: 500,
});

// Mock para ECharts
jest.mock('echarts', () => ({
  init: jest.fn(() => ({
    setOption: jest.fn(),
    dispose: jest.fn(),
    resize: jest.fn(),
  })),
}));
