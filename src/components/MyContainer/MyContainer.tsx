import "./mycontainer.css";
// components
import { MyCard } from "@/components";

export default function MyContainer() {
  return (
    <>
      <main className="grid place-items-center min-h-screen">
        <MyCard />
      </main>
    </>
  );
}
