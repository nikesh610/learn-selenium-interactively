"use client";

import React, { useState, useRef, useEffect } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Play, Copy, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EditorProps {
  defaultValue: string;
  height?: string;
  onRun: (code: string) => void;
  isRunning: boolean;
}

const Editor: React.FC<EditorProps> = ({
  defaultValue,
  height = "400px",
  onRun,
  isRunning,
}) => {
  const [value, setValue] = useState(defaultValue);
  const editorRef = useRef<any>(null);
  const { toast } = useToast();

  // Reset to default value when defaultValue changes
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleCopy = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      navigator.clipboard.writeText(code);
      toast({
        title: "Copied to clipboard",
        description: "The code has been copied to your clipboard.",
      });
    }
  };

  const handleReset = () => {
    setValue(defaultValue);
    toast({
      title: "Code reset",
      description: "The code has been reset to the default example.",
    });
  };

  const handleRun = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      onRun(code);
    }
  };

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="flex items-center justify-between bg-muted p-2 border-b">
        <div className="text-sm font-medium">Selenium Code</div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1"
            onClick={handleCopy}
          >
            <Copy className="h-4 w-4" />
            <span className="hidden sm:inline">Copy</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1"
            onClick={handleReset}
          >
            <RotateCcw className="h-4 w-4" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
          <Button
            size="sm"
            className="h-8 gap-1"
            onClick={handleRun}
            disabled={isRunning}
          >
            <Play className="h-4 w-4" />
            <span>{isRunning ? "Running..." : "Run Code"}</span>
          </Button>
        </div>
      </div>
      <MonacoEditor
        height={height}
        language="python"
        value={value}
        onChange={(newValue) => setValue(newValue || "")}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          wordWrap: "on",
          automaticLayout: true,
          tabSize: 4,
          renderLineHighlight: "all",
          fontFamily: "monospace",
        }}
        theme="vs-dark"
      />
    </div>
  );
};

export default Editor;