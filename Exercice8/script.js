function add(a, b) {
  const numA = typeof a === "string" ? parseFloat(a) : a;
  const numB = typeof b === "string" ? parseFloat(b) : b;
  return numA + numB;
}

export default add;
