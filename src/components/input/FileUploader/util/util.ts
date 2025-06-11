import { fileTypeFromBuffer } from "file-type";
import { FileWithMetadata } from "../type";
import { allowExtension } from "../constant";

export const formatByte = (value: number, scale = 1) => {
  if (typeof value !== "number" && value < 0)
    throw new Error(
      "error: formatByte - arg: value의 타입은 number type의 양수이어야 합니다"
    );

  const mapping = ["B", "KB", "MB", "GB", "TB", "PB"];

  const formatValue = ((argValue) => {
    let currentValue = argValue;
    let index = 0;
    while (currentValue >= 1024 && index < mapping.length - 1) {
      currentValue /= 1024;
      index++;
    }
    return `${currentValue.toFixed(scale)}${mapping[index]}`;
  })(value);

  return formatValue;
};

const magicNumberMap: {
  [key: string]: { ext: string; mime: string } | undefined;
} = {
  "ff d8 ff e0": { ext: "jpg", mime: "image/jpeg" },
  "ff d8 ff e1": { ext: "jpg", mime: "image/jpeg" },
  "89 50 4e 47": { ext: "png", mime: "image/png" },
  "47 49 46 38": { ext: "gif", mime: "image/gif" },
  "25 50 44 46": { ext: "pdf", mime: "application/pdf" },
  "50 4b 03 04": { ext: "zip", mime: "application/zip" }, // 기본 zip
  "50 4b 07 08": { ext: "zip", mime: "application/x-zip-compressed" }, // 일부 zip 변형
  "50 4b 05 06": { ext: "zip", mime: "application/x-zip-compressed" }, // 일부 zip 변형
  "50 4b 06 06": { ext: "zip", mime: "application/x-zip-compressed" }, // 일부 zip 변형
  "52 61 72 21": { ext: "rar", mime: "application/x-rar-compressed" },
  // 추가적인 매직 넘버 매핑 가능
};

const identifyFileTypeFromCustomMagicNumber = async function (file: File) {
  const shortBuffer = await file.slice(0, 16).arrayBuffer();
  const magicNumber = Array.from(new Uint8Array(shortBuffer))
    // .slice(0, 4)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join(" ");

  return magicNumberMap[magicNumber] || undefined;
};

export interface returnFormatFileTypeFromBuffer {
  ext: string | undefined;
  mime: string | undefined;
}

// 파일의 바이너리 코드에서 magic number를 읽어 확장자 추론
// 느리지만 보안이 강함
export const formatFileTypeFromBuffer = async (
  file: File
): Promise<returnFormatFileTypeFromBuffer | undefined> => {
  const buffer = await file.slice(0, 4100).arrayBuffer();
  return await fileTypeFromBuffer(new Uint8Array(buffer));
};

// fileHubRef와 인풋을 uniqueKey로 연결
export function connectRefObject(
  fromRef: HTMLInputElement | null,
  toRef:
    | React.MutableRefObject<{
        [key: string]: HTMLInputElement | null;
      }>
    | undefined,
  onUniqueKey: string
) {
  if (!toRef?.current) return;
  const address = toRef.current[onUniqueKey];
  if (fromRef && address && !address.isEqualNode(fromRef))
    console.warn(
      "서로 다른 uploader 컴포넌트가 동일한 unique key를 사용하는 것으로 의심됩니다. 해당 경우는 예상치 못한 에러를 일으킬 수 있으니 확인해주세요"
    );
  toRef.current[onUniqueKey] = fromRef;
}

// 파일 확장자 검사
export const checkFileExtension = async (
  file: File
): Promise<returnFormatFileTypeFromBuffer | undefined> => {
  const result1 = await formatFileTypeFromBuffer(file);

  // 구형 ms 확장자로 판단. 파일 확장자 허가
  if (result1?.ext === "cfb") {
    return {
      ext: file.name.replace(/^.*\./, ""),
      mime: file.type,
    };
  }

  // 커스텀 검사기로 한번 더 확인
  if (result1?.ext === undefined) {
    const result2 = await identifyFileTypeFromCustomMagicNumber(file);
    return (
      result2 || {
        ext: "",
        mime: "",
      }
    );
  }

  return result1;
};

// 사이즈 초과 확인
export const checkOverMaxSizeToFiles = (
  files: FileWithMetadata[],
  maxByte: number
) => {
  const totalsize = files.reduce((acc, curVal) => acc + curVal.file.size, 0);
  return maxByte < totalsize;
};

// 파일 형식 검사
export const checkAllowExtensionToFiles = (files: FileWithMetadata[]) => {
  return files.every(
    (el) =>
      el.metadata.extension && allowExtension.includes(el.metadata.extension)
  );
};
