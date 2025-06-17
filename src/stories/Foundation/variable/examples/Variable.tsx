import React from "react";
import resolvedToken from "@designTokens/build/tokens_resolved";
export default function Variable() {
  console.log("resolvedToken", resolvedToken);

  return <div>Variable</div>;
}
