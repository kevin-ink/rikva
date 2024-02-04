import NavBar from "./components/navbar";
import Wip from "./components/wip-page";

export default function Home() {
  return (
    <main className="flex min-w-screen min-h-screen flex-col items-center justify-between">
      <NavBar />
      <Wip />
    </main>
  );
}
