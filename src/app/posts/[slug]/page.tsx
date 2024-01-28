"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Comments from "@/ui/CommentsSection";

export default function DisplaySinglePost() {
  return (
    <>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Clicked post title</CardTitle>
          <CardDescription>Clicked post author description</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>The content of the blog </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="bg-primary text-white">Like </Button>
        </CardFooter>
      </Card>

      <Comments />
    </>
  );
}
