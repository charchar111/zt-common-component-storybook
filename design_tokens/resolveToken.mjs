// @ts-check
import fs from "fs";
import path from "path";

import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// 작업 파이프 라인
// 1. 토큰 파일 읽기
// 2. 토큰 파일 내 중괄호 참조값에 prefix 붙이기
// 3. 파일 alias를 resolve하기(피그마 변수를 해당 값으로 대체)
// 4. 결과 파일 json으로 저장하기
[
  {
    COLLECTION_PREFIX: "primitive/value-set",
    REF_REGEX: /{([^{}]+)}/g,
    inputPath: path.resolve("./design_tokens/source/tokens.json"),
    build1Path: path.resolve("./design_tokens/build/tokens_prefix.json"),
    outputPath: "./design_tokens/build/",
    outputFileName: "tokens_resolved.json",
  },
]
  .map(function getTokenFile(config) {
    console.log("✅ 피그마 토큰(단일 json파일) 변환 작업 시작");
    console.log("✅ 토큰 파일 읽기");

    return {
      config,
      tokens: JSON.parse(fs.readFileSync(config.inputPath, "utf-8")),
    };
  })
  .map(({ config, tokens }) => {
    console.log("✅ 토큰 파일에 collection prefix 추가");
    const prefixedTokenFile = addPrefixCollectionName({
      tokens,
      regex: config.REF_REGEX,
      collectionPrefix: config.COLLECTION_PREFIX,
    });

    // build1Path 경로가 존재하지 않으면 생성
    ensureDirectoryExists(path.dirname(config.build1Path));

    fs.writeFileSync(
      config.build1Path,
      JSON.stringify(prefixedTokenFile, null, 2),
      "utf-8",
    );

    return {
      buildInputPath: config.build1Path,
      outputPath: config.outputPath,
      outputFileName: config.outputFileName,
    };
  })
  .map(async ({ outputPath, buildInputPath, outputFileName }) => {
    console.log("✅ 토큰 파일에 alias resolve 작업");

    await resolveFigmaAlias({ outputPath, buildInputPath, outputFileName });
    // ✅ 중간 파일 삭제
    fs.unlinkSync(buildInputPath);
    console.log("✅ 작업 완료");
  });

// 폴더가 존재하는지 확인하고 없으면 생성하는 함수
function ensureDirectoryExists(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true }); // 중첩된 디렉토리도 생성
  } else {
  }
}

function addPrefixCollectionName({ tokens, regex, collectionPrefix }) {
  /**
   * 재귀적으로 value 내 중괄호 참조값에 prefix 붙이기
   * @param {any} obj
   * @returns {any}
   */
  function resolveReferences(obj) {
    if (typeof obj === "string") {
      return obj.replace(regex, (_, ref) => {
        if (ref.startsWith(collectionPrefix + ".")) return `{${ref}}`;
        return `{${collectionPrefix}.${ref}}`;
      });
    }

    if (Array.isArray(obj)) return obj.map(resolveReferences);
    if (typeof obj === "object" && obj !== null) {
      const newObj = {};
      for (const key in obj) {
        newObj[key] = resolveReferences(obj[key]);
      }
      return newObj;
    }

    return obj;
  }

  return resolveReferences(tokens);
}

async function resolveFigmaAlias({
  buildInputPath,
  outputPath,

  outputFileName,
}) {
  // Style Dictionary에 tokens-studio 트랜스폼 등록
  register(StyleDictionary, {});
  const sd = new StyleDictionary({
    source: [buildInputPath], // 통합 토큰 파일 경로
    preprocessors: ["tokens-studio"], // <-- since 0.16.0 this must be explicit
    platforms: {
      json: {
        transformGroup: "tokens-studio", // tokens-studio 트랜스폼 그룹 사용
        buildPath: outputPath,
        files: [
          {
            destination: outputFileName,
            format: "json",
            options: {
              outputReferences: false,
              stripMeta: {
                keep: ["value", "type", "original"], // 필요한 메타만 유지
              },
            },
          },
        ],
      },
    },

    log: {
      warnings: "warn", // 'warn' | 'error' | 'disabled'
      verbosity: "verbose", // 'default' | 'silent' | 'verbose'
      errors: {
        brokenReferences: "console", // 'throw' | 'console'
      },
    },
  });
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
}
