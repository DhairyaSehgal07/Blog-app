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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="latest" className="w-7xl mt-6 min-h-[200px]">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="allposts">All</TabsTrigger>
        <TabsTrigger value="latest">Latest</TabsTrigger>
        <TabsTrigger value="love">Love</TabsTrigger>
        <TabsTrigger value="academics">Academics</TabsTrigger>
        <TabsTrigger value="fest">Fest</TabsTrigger>
      </TabsList>
      <TabsContent value="allposts">
        <Card>
          <CardHeader>
            <CardTitle>All Posts</CardTitle>
            <CardDescription>Description of author</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>The content of the blog </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="bg-primary text-white">View </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="latest">
        <Card>
          <CardHeader>
            <CardTitle>Latest</CardTitle>
            <CardDescription>Description of author</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>The content of the blog </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="bg-primary text-white">View </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="love">
        <Card>
          <CardHeader>
            <CardTitle>Love</CardTitle>
            <CardDescription>Description of author</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>The content of the blog </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="bg-primary text-white">View </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="academics">
        <Card>
          <CardHeader>
            <CardTitle>Academics</CardTitle>
            <CardDescription>Description of author</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>The content of the blog </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="bg-primary text-white">View </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="fest">
        <Card>
          <CardHeader>
            <CardTitle>College fest</CardTitle>
            <CardDescription>Description of author</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>The content of the blog </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="bg-primary text-white">View </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default TabsDemo;
