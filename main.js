const originalDisorderFormat =
  "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia";

const disorders = originalDisorderFormat.split("|$|");

const wrappedDisorders = disorders.join("</div>\n<div>");

console.log(`<div>${wrappedDisorders}</div>`);
