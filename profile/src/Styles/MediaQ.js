
const size = {
  xs: "375px",
  s: "430px",
  m: "768px",
  lg: "1200px",
};
const device = {
  xs: `(max-width: ${size.xs})`,
  s: `(max-width:${size.s})`,
  sm: `(max-width: ${size.m})`,
  lg: `(max-width: ${size.lg})`,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { size, device };
