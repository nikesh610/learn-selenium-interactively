"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { TopicData } from "@/types";

interface TopicListProps {
  topics: TopicData[];
}

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <h2 className="font-semibold text-lg mb-4">Topics</h2>
      <Separator className="my-2" />
      <div className="space-y-1 py-2">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className={cn(
              "flex items-center py-2 px-3 rounded-md text-sm transition-colors hover:bg-muted",
              pathname === `/topics/${topic.slug}`
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground"
            )}
          >
            {topic.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicList;