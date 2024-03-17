export default function DocsDetail({ params }) {
  return (
    <>
      <h2>Docs Page</h2>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </>
  );
}
