import { getAllTopics } from "@/lib/topics";

export async function generateStaticParams() {
    const topics = getAllTopics();
    return topics.map((topic) => ({
        slug: topic.slug,
    }));
}