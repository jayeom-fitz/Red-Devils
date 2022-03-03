export function getNameColor(level) {
  switch (level) {
    case 3:
      return 'green';
    case 4:
      return 'blue';
    case 5:
      return 'red';
    default:
      return 'black';
  }
}

export function getNameWeight(level) {
  switch (level) {
    case 2:
    case 3:
      return 300;
    case 4:
    case 5:
      return 900;
    default:
      return 100;
  }
}
