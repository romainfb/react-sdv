const LastProducts = (productsProps) => {

    const publishedProducts = productsProps.productsProps.filter(product => product.isPublished);

    const fiveLastProducts = publishedProducts.slice(-5);

    return (
        <div className="flex p-6 my-16 items-center justify-center flex-col">

            <h2 className="text-4xl font-black pb-12 text-center">Les 5 derniers produits publiés</h2>

            <div className="flex w-96 h-fit p-8 flex-col items-center">

            {fiveLastProducts.map((product) => {
                    return (
                        <div className="flex w-96 h-fit shadow-lg p-8 flex-col items-center">

                            <h2 className="font-bold pb-2">{product.title}</h2>
                            <h2 className=""><strong>Prix: </strong>{product.price}€</h2>
                            <h2 className=""><strong>Note: </strong>{product.rating}</h2>

                        </div>
                    )
                })}

            </div>

        </div>
    );
};
  
export default LastProducts;