"use client";
import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();
  const onPlaceOrder = () => {
    router.push("/order-confirm");
    // router.replace
    // router.back
    // router.forward
  };
  // const onPlaceOrder = () => {}
  return (
    <>
      <h2>Order Page</h2>
      <button className="p-10" onClick={onPlaceOrder}>
        Place order
      </button>
    </>
  );
}
