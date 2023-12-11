const MostRatedProduct = (productsProps) => {

    const bestProduct = [...productsProps.productsProps].sort((a, b) => b.rating - a.rating)[0];

    return (
        <div className="flex p-6 my-16 items-center justify-center flex-col">

            <h2 className="text-4xl font-black pb-12 text-center">Le produit le mieux noté</h2>

            <div className="flex w-96 h-fit shadow-lg p-8 flex-col items-center">

                <h2 className="font-bold pb-2">{bestProduct.title}</h2>
                <h2 className=""><strong>Prix: </strong>{bestProduct.price}€</h2>
                <h2 className=""><strong>Note: </strong>{bestProduct.rating}</h2>

            </div>

        </div>
    );
};
  
  export default MostRatedProduct;