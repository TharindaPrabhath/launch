import Aurora from "@/components/aurora";
import { LaunchPad } from "@/components/launch-pad";

export default function Home() {
  return (
    <main className="relative h-screen bg-black overflow-hidden">
      <Aurora
        className="fixed top-0 left-0 right-0 w-full h-96"
        colorStops={["#dc2626", "#ef4444", "#991b1b"]}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LaunchPad />
      </div>
    </main>
  );
}
