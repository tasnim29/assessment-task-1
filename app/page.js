import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl text-red-500 text-center">hello</h1>
      <Button variant="outline">Press me</Button>
    </div>
  );
}
