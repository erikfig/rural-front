require('@testing-library/jest-dom');

HTMLCanvasElement.prototype.getContext = jest.fn();

Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
  configurable: true,
  value: 1000,
});

Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
  configurable: true,
  value: 500,
});

jest.mock('echarts', () => ({
  init: jest.fn(() => ({
    setOption: jest.fn(),
    dispose: jest.fn(),
    resize: jest.fn(),
  })),
}));
