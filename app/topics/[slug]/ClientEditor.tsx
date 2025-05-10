"use client";

import React, { useState } from "react";
import Editor from "@/components/Editor";
import ConsoleOutput from "@/components/ConsoleOutput";
import { executeCode } from "@/app/api/run-code";

export default function ClientEditor({ defaultValue }: { defaultValue: string }) {
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
        <div className="space-y-4">
            <Editor
                defaultValue={defaultValue}
                height="400px"
                onRun={handleRunCode}
                isRunning={isRunning}
            />

            <ConsoleOutput
                output={output}
                error={isError}
                onClear={handleClearOutput}
            />
        </div>
    );
}