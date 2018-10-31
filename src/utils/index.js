export const toNumber = num => {
  if (typeof num !== 'string') {
    return num;
  } else {
    const parsed = Number(num);
    return isNaN(parsed)
      ? num
      : parsed
  }
}