"use client";

import React, { useState } from "react";
import { defaultSnippet } from "@/lib/snippets";
import Editor from "@/components/Editor";
import ConsoleOutput from "@/components/ConsoleOutput";
import { executeCode } from "@/app/api/run-code";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlaygroundPage() {
  const [output, setOutput] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleRunCode = async (code: string) => {
    setIsRunning(true);
    setOutput("Running code...");
    setIsError(false);

    try {
      const result = await executeCode(code);
      setOutput(result.output);
      setIsError(!result.success);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
      setIsError(true);
    } finally {
      setIsRunning(false);
    }
  };

  const handleClearOutput = () => {
    setOutput("");
    setIsError(false);
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Selenium Playground</h1>
        <p className="text-xl text-muted-foreground">
          Experiment with Selenium code in a safe, browser-based environment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Code Editor</CardTitle>
              <CardDescription>
                Write your Selenium Python code below and click "Run Code" to execute it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Editor
                defaultValue={defaultSnippet}
                height="600px"
                onRun={handleRunCode}
                isRunning={isRunning}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Console Output</CardTitle>
              <CardDescription>
                Results of your code execution will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ConsoleOutput
                output={output}
                error={isError}
                onClear={handleClearOutput}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Headless Mode</h3>
                <p className="text-sm text-muted-foreground">
                  The code runs in headless mode, which means the browser won't be visible but will execute all commands.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Using print()</h3>
                <p className="text-sm text-muted-foreground">
                  Use print() statements to see values in the console output.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Error Handling</h3>
                <p className="text-sm text-muted-foreground">
                  Wrap your code in try/except blocks to catch and display errors gracefully.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}