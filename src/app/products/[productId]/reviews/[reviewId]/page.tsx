import { notFound } from "next/navigation";

export default function ReviewDetail({ params }) {
  console.log("**** params", params);
  if (parseInt(params.reviewId) > 100) {
    return notFound();
  }
  return (
    <>
      <h2>Review Details Page</h2>
      <h4>
        Details of Product {params.productId} and Review {params.reviewId}{" "}
      </h4>
    </>
  );
}
