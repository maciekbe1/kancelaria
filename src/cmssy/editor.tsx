"use client";

import { useEffect, useState } from "react";
import { CmssyEditablePage } from "@cmssy/react/client";
import type { BlockDefinition } from "@cmssy/react";
import type { CmssyEditorProps } from "@cmssy/next";

export function CmssyEditor(props: CmssyEditorProps) {
  const [data, setData] = useState<{
    blocks: BlockDefinition[];
    category: string;
  } | null>(null);

  useEffect(() => {
    let active = true;
    import("./blocks").then((m) => {
      if (active) setData({ blocks: m.blocks, category: m.blockCategory });
    });
    return () => {
      active = false;
    };
  }, []);

  if (!data) return null;
  return (
    <CmssyEditablePage
      {...props}
      blocks={data.blocks}
      category={data.category}
    />
  );
}
