export const getRandomIntInclusive = (minN, maxN) => {
  // The maximum is inclusive and the minimum is inclusive
  const min = Math.ceil(minN);
  const max = Math.floor(maxN);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
