import { NextResponse, type NextRequest } from "next/server";
import { applyCmssyCsp } from "@cmssy/next";
import { cmssy } from "@/cmssy/config";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const editMode =
    request.cookies.has("__prerender_bypass") ||
    request.nextUrl.searchParams.getAll("cmssyEdit").includes("1");
  if (editMode) {
    applyCmssyCsp(response, { editorOrigin: cmssy.editorOrigin });
  }
  return response;
}
