type ProductPrams = {
    id: string;
}

type ProductParams = {
    params: ProductPrams
}

export default function Products({ params }: ProductParams) {
    return (
      <>
        <h2>Products Details Page</h2>
        <h4>Details of {params.id}</h4>
      </>
    );
  }
  