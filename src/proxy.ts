import { NextResponse, type NextRequest } from "next/server";
import {
  applyCmssyCsp,
  CMSSY_EDIT_HEADER,
  isCmssyEditRequest,
} from "@cmssy/next";
import { cmssy } from "@/cmssy/config";

export function proxy(request: NextRequest) {
  const editMode = isCmssyEditRequest(request);

  // Forward edit mode to server components (the root layout can't read
  // searchParams) so layouts draft on the same signal as content.
  const requestHeaders = new Headers(request.headers);
  if (editMode) requestHeaders.set(CMSSY_EDIT_HEADER, "1");

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (editMode) {
    applyCmssyCsp(response, { editorOrigin: cmssy.editorOrigin });
  }
  return response;
}
