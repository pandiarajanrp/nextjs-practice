import Batch from "@/components/Batch";
import { toUpper } from "../_lib/case";

export default function About() {
  return (
    <>
      <h2>About Page</h2>
      <Batch />
      {toUpper('This text from Private folder with lib toUpper')}
    </>
  );
}
