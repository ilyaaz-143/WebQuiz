
export default function SelectDeficalty(Dificunty) {
  const def = ["Easy", "Medium", "Hard"];
  if (Dificunty >= def.length) {
    // Dificunty = 0;
    return "completed";
  }
  return def[Dificunty];
}
