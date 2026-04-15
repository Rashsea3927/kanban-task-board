import data from "@/data.json";
import { redirect } from "next/navigation";

export default function Home() {
  if (data.boards.length > 0) {
    redirect(`/boards/${data.boards[0].slug}`);
  } else {
    redirect(`/boards`);
  }
}
