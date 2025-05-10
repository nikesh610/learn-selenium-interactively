import { executeCode } from "@/app/api/run-code";
import { NextRequest, NextResponse } from "next/server";
import { CodeExecutionRequest, CodeExecutionResponse } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as CodeExecutionRequest;
    
    if (!body.code) {
      return NextResponse.json(
        { error: "No code provided" },
        { status: 400 }
      );
    }
    
    const result = await executeCode(body.code);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in API route:", error);
    
    return NextResponse.json(
      {
        output: `Server error: ${error instanceof Error ? error.message : String(error)}`,
        error: String(error),
        success: false
      } as CodeExecutionResponse,
      { status: 500 }
    );
  }
}