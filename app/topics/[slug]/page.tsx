import React from "react";
import { getTopicBySlug, getAllTopics } from "@/lib/topics";
import { TopicData } from "@/types";
import { Separator } from "@/components/ui/separator";
import TopicList from "@/components/TopicList";
import MarkdownContent from "@/components/MarkdownContent";
import ClientEditor from "./ClientEditor";

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topics = getAllTopics();
  const topic = getTopicBySlug(params.slug) as TopicData;

  if (!topic) {
    return (
      <div className="container max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Topic Not Found</h1>
        <p className="text-xl text-muted-foreground">
          The topic you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        <div className="hidden md:block border-r pr-6">
          <TopicList topics={topics} />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{topic.title}</h1>
            <p className="text-muted-foreground mt-2">{topic.description}</p>
          </div>

          <Separator />

          <MarkdownContent content={topic.content} />

          <h2 className="text-2xl font-bold mt-8 mb-4">Try It Yourself</h2>

          <ClientEditor defaultValue={topic.snippet} />
        </div>
      </div>
    </div>
  );
}

export { generateStaticParams } from "./static";