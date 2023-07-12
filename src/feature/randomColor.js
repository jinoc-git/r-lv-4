const color1 = [
  '#EECCCC',
  '#EED4CC',
  '#EEE5CC',
  '#EEEECC',
  '#E5EECC',
  '#D4EECC',
  '#CCEED4',
  '#CCEEDD',
  '#CCEEEE',
  '#CCDDEE',
  '#CCCCEE',
  '#DDCCEE',
  '#EECCEE',
  '#EECCD4',
];

const color2 = [
  '#FF9100',
  '#D2691E',
  '#FF5675',
  // '#EEEECC',
  '#FF46C5',
  '#228B22',
  '#0078FF',
  '#660000',
  '#FFC000',
  '#4D0088',
  '#0F3067',
  '#182605',
  '#4B4B4B',
  '#9D71BD',
];

const randomColor = () => {
  const randomColors = color1[Math.floor(Math.random() * 14)];
  return randomColors;
};

export default randomColor