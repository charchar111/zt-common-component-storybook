import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import resolvedToken from "@designTokens/build/tokens_resolved";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Variable({
  variableKeys,
}: {
  variableKeys: keyof typeof resolvedToken;
}) {
  console.log("resolvedToken", resolvedToken);

  const target = resolvedToken?.[variableKeys];

  return <div>{!target ? "오류 발생" : <RenderTokens tokens={target} />}</div>;
}

function RenderTokens({
  tokens,
  path = [],
}: {
  tokens: Record<string, any>;
  path?: string[];
}) {
  // 말단 노드가 아니고, tokens가 객체일 때:
  if (
    typeof tokens === "object" &&
    tokens !== null &&
    !Array.isArray(tokens) &&
    Object.keys(tokens).length > 0 &&
    !("value" in tokens && "type" in tokens)
  ) {
    // 현재 객체의 자식들 중 말단 노드와 비말단 노드를 분리
    const entries = Object.entries(tokens);

    // 말단 노드만 분리
    const leafNodes = entries.filter(
      ([_, val]) =>
        typeof val === "object" &&
        val !== null &&
        "value" in val &&
        "type" in val
    );
    // 비말단 노드만 분리
    const innerNodes = entries.filter(
      ([_, val]) =>
        !(
          typeof val === "object" &&
          val !== null &&
          "value" in val &&
          "type" in val
        )
    );

    return (
      <>
        {path.length > 0 && (
          <Accordion
            // TransitionProps={{ timeout: 0 }}
            slotProps={{ transition: { timeout: 0 } }}
            defaultExpanded
            sx={{
              marginLeft: path.length * 2,
              boxShadow: "none",
              border: "none",
            }}
            disableGutters
            elevation={0}
            square
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ paddingLeft: path.length * 2 }}
            >
              <Typography fontWeight="bold">{path[path.length - 1]}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingLeft: 2 }}>
              {/* 비말단 노드들 재귀 렌더 */}
              {innerNodes.map(([key, val]) => (
                <RenderTokens key={key} tokens={val} path={[...path, key]} />
              ))}

              {/* 말단 노드들을 grid container로 가로 배치 */}
              {leafNodes.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: 12,
                    marginTop: 8,
                    wordBreak: "keep-all",
                    overflowWrap: "anywhere",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {leafNodes.map(([key, val]) => (
                    <LeafNode key={key} token={val} name={key} />
                  ))}
                </div>
              )}
            </AccordionDetails>
          </Accordion>
        )}

        {/* 최상위 레벨 (path.length === 0)일 경우, Accordion 없이 그냥 재귀 호출 */}
        {path.length === 0 &&
          entries.map(([key, val]) => (
            <RenderTokens key={key} tokens={val} path={[...path, key]} />
          ))}
      </>
    );
  }

  // 말단 노드 렌더링 컴포넌트
  if ("value" in tokens && "type" in tokens) {
    return <LeafNode token={tokens as any} name={path[path.length - 1]} />;
  }

  // fallback (배열, null 등)
  const value = String(tokens);
  return (
    <div style={{ marginLeft: path.length * 16 }}>
      <strong>{path.join(".")}:</strong> {value}
    </div>
  );
}

function LeafNode({
  token,
  name,
}: {
  token: { value: string; type: string; original?: { value: string } };
  name: string;
}) {
  return (
    <div
      style={{
        margin: "12px",
        padding: "12px",
        border: "1px solid rgb(202, 202, 202)",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        {token?.type !== "color" ? null : (
          <div
            style={{
              width: 32,
              height: 32,
              background: token.value,
              border: "1px solid #ccc",
              borderRadius: 4,
              margin: "4px 0",
            }}
          />
        )}

        <strong style={{ textAlign: "center" }}>{name}</strong>
        <div>
          <p style={{ margin: "12px 0", textAlign: "center" }}>{token.value}</p>
          {token?.original?.value === token.value ? null : (
            <p style={{ color: "gray", fontSize: "12px" }}>
              {token?.original?.value
                .replace("{", "")
                .replace("}", "")
                .split(".")
                .join(" \n>")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
