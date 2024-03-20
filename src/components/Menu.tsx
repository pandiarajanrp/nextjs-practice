import Link from "next/link";

export default function Menu() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 20,
      }}
    >
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/products">Product List</Link>
        </li>
        <li>
          <Link href="/products/1">Product Details</Link>
        </li>
        <li>
          <Link href="/products/1/reviews">Product Reviews List</Link>
        </li>
        <li>
          <Link href="/products/1/reviews/1">Product Review</Link>
        </li>
        <li>
          <Link href="/docs/features/1/example/1">Product Details</Link>
        </li>
        <li>
          <Link href="/order">Order</Link>
        </li>
      </ul>
    </div>
  );
}
