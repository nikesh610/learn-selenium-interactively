import React from "react";
import Link from "next/link";
import { getAllTopics } from "@/lib/topics";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TopicsPage() {
  const topics = getAllTopics();

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Selenium Topics</h1>
        <p className="text-xl text-muted-foreground">
          Explore our comprehensive guide to Selenium WebDriver with Python
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card key={topic.slug} className="flex flex-col hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {topic.content.split('\n').slice(0, 3).join(' ').substring(0, 150)}...
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/topics/${topic.slug}`}
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full gap-1 group"
                })}
              >
                View Topic
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}