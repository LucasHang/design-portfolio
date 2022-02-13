const random = () => Math.floor(Math.random() * 255);
const randomRgb = () => `rgb(${random()}, ${random()}, ${random()})`;

export { random, randomRgb };
