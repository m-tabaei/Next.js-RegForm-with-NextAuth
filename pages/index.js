import { Inter } from "@next/font/google";
import RegForm from "../components/templates/RegForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <RegForm />
    </div>
  );
}
