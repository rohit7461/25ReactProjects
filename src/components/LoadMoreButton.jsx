import { useEffect, useState } from "react"

function LoadMoreButton() {

    const [productData, setProductData] = useState([])

    const loadProducts = () => {
        try {
            fetch('https://dummyjson.com/products?limit=10&select=title,id,price,thumbnail')
                .then(res => res.json())
                .then(data => {
                    setProductData(data.products);
                });
        }
        catch (err) {
            console.log(err);
        }

    }

    const handleLoadMore = () => {
        try {
            fetch(`https://dummyjson.com/products?limit=10&skip=${productData.length}&select=title,id,price,thumbnail`)
                .then(res => res.json())
                .then(data => {
                    setProductData([...productData, ...data.products]);
                });
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadProducts();
    }, [])

    if (productData.length === 0) return <section>Loading...</section>

    return (
        <section>
            <ul className="products">
                {
                    productData.map((product, i) => {
                        return (
                            <li className="product" key={i}>
                                <img src={product.thumbnail} alt="" />
                                <div className="info">
                                    <h3>{product.title}</h3>
                                    <p>${product.price}</p>
                                </div>
                            </li>
                        )
                    })
                }
                {
                    productData.length === 100 ? <p>You have reached 100 results!</p> : ""
                }
            </ul>
                <button onClick={handleLoadMore} disabled={productData.length === 100}>Load More</button>
        </section>
    )
}
export default LoadMoreButton