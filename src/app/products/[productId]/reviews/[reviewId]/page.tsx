export default function ReviewDetail({ params }) {
    console.log('**** params', params)
    return (
      <>
        <h2>Review Details Page</h2>
        <h4>Details of Product {params.productId} and Review {params.reviewId} </h4>
      </>
    );
  }
  