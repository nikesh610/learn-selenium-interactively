"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ConsoleOutputProps {
  output: string;
  error: boolean;
  onClear: () => void;
}

const ConsoleOutput: React.FC<ConsoleOutputProps> = ({
  output,
  error,
  onClear,
}) => {
  const outputRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied to clipboard",
      description: "The console output has been copied to your clipboard.",
    });
  };

  return (
    <div className="border rounded-md overflow-hidden bg-black text-white">
      <div className="flex items-center justify-between p-2 bg-zinc-800 border-b border-zinc-700">
        <div className="text-sm font-medium text-zinc-200">Console Output</div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1 bg-zinc-700 hover:bg-zinc-600 border-zinc-600 text-zinc-200"
            onClick={handleCopy}
            disabled={!output}
          >
            <Copy className="h-4 w-4" />
            <span className="hidden sm:inline">Copy</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1 bg-zinc-700 hover:bg-zinc-600 border-zinc-600 text-zinc-200"
            onClick={onClear}
            disabled={!output}
          >
            <XCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Clear</span>
          </Button>
        </div>
      </div>
      <div
        ref={outputRef}
        className={cn(
          "p-4 font-mono text-sm whitespace-pre-wrap h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900",
          error ? "text-red-400" : "text-green-400"
        )}
      >
        {output || "Run your code to see the output here..."}
      </div>
    </div>
  );
};

export default ConsoleOutput;