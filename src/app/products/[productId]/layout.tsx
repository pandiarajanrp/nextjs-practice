export default function ProductDetailLayout({ children }) {
    return (
      <div
        className="header"
        style={{
          background: "#f13D21",
          padding: 20,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2>Product Details</h2>
        <div>{children}</div>
      </div>
    );
  }
  