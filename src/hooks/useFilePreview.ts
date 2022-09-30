import { useEffect, useMemo } from "react";

export function useFilePreview(file: File | null) {
  const previewURL = useMemo(
    () => (file ? URL.createObjectURL(file) : null),
    [file]
  );

  useEffect(() => {
    return () => {
      if (previewURL) {
        URL.revokeObjectURL(previewURL);
      }
    };
  }, [previewURL]);

  return previewURL;
}
