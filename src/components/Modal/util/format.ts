export function convertStyleValue(
  value: string | number | undefined,
  format?: string
) {
  const defaultFormat = format ?? "px";
  return typeof value === "number" ? value + defaultFormat : value;
}

export function extractNumberFromStyleValue(
  value: string | number | undefined
) {
  if (typeof value === "number") return value;

  if (typeof value === "string") {
    const units = [
      "px",
      "em",
      "rem",
      "%",
      "vh",
      "vw",
      "vmin",
      "vmax",
      "cm",
      "mm",
      "in",
      "pt",
      "pc",
      "ex",
      "ch",
      "lh",
      "rlh",
    ];

    const foundUnit = units.find((unit) => value.endsWith(unit));
    const numberPart = foundUnit
      ? value.slice(0, -foundUnit.length).trim()
      : value;

    const number = Number(numberPart);
    return isNaN(number) ? undefined : number;
  }

  return undefined;
}
