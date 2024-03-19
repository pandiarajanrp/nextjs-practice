import Batch from "@/components/Batch";
import { toUpper } from "../_lib/case";

/**
 * 
 * @returns this function can be async
 */
export const generateMetadata = () => {
  return {
    title: 'About Nextjs 14x',
    description: 'This is practice for Nextjs 14.x'
  }
}

export default function About() {
  return (
    <>
      <h2>About Page</h2>
      <Batch />
      {toUpper('This text from Private folder with lib toUpper')}
    </>
  );
}
