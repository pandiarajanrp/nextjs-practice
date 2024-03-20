"use client";

import Batch from "@/components/Batch";
import { toUpper } from "../_lib/case";

/**
 *
 * @returns this function can be async
 */
// export const generateMetadata = () => {
//   return {
//     title: "About Nextjs 14x",
//     description: "This is practice for Nextjs 14.x",
//   };
// };

const genRandom = (count) => Math.round(Math.random() * count);

export default function About() {
  const random = genRandom(2);
  console.log("*** random", random);
  if (random === 1) {
    throw new Error("Invalid Random Number");
  }
  return (
    <>
      <h2>About Page</h2>
      <Batch />
      {toUpper("This text from Private folder with lib toUpper")}
    </>
  );
}
