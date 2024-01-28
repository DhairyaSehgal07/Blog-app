"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="mt-16 min-h-[32rem] max-w-6xl  rounded-lg border-8 md:mt-32"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex justify-start p-2 md:ml-4">
          <span className="text-2xl font-semibold">Comments</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="px-4">
          <h2 className="p-2">Logged in username</h2>
          <Textarea placeholder="Enter your comment..." />
          <div className="flex justify-end p-2">
            <Button className="mt-2 text-sm ">post</Button>
          </div>
        </div>

        <div className="mt-4  px-4">
          <h2 className="p-2">Username</h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            commodi molestiae aut quos culpa animi cupiditate rerum magnam
            quasi, enim temporibus vero eos, sit, beatae ratione placeat facilis
            labore eligendi laborum soluta explicabo at accusamus! Corporis
            officia quibusdam cupiditate quae, minima sapiente voluptate rerum
            accusantium earum recusandae modi in odit?{" "}
          </p>
          <div className="flex justify-end p-2">
            <Button className="text-sm md:mt-2 ">reply</Button>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
