import { useParams } from "react-router";

function ProductPage() {
  const { id } = useParams();
  return (
    <>
      <h1> Welcome to the page of {id} </h1>
    </>
  );
}

export default ProductPage;
