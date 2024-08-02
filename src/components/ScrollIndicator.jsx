import { useEffect, useState } from "react";

function ScrollIndicator() {

    const [productData, setProductData] = useState([])
    const [scrollPercent, setScrollPercent] = useState(0)
    const [loading, setLoading] = useState(true)

    const loadProducts = async () => {
        try {
            await fetch('https://dummyjson.com/products?limit=10&select=title,id,price,thumbnail')
                .then(res => res.json())
                .then(data => {
                    setProductData(data.products);
                    setLoading(false)
                });
        }
        catch (err) {
            console.log(err);
        }

    }

    const handleLoadMore = async () => {
        try {
            await fetch(`https://dummyjson.com/products?limit=10&skip=${productData.length}&select=title,id,price,thumbnail`)
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

    const handleScrollPercent = () => {

        const scrolledFromTop = document.documentElement.scrollTop;
        const heightToScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercent((scrolledFromTop / heightToScroll) * 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercent);

        return () => {
            window.removeEventListener('scroll', handleScrollPercent);
        }
    }, [])

    if (loading)
        return (<section>Loading...</section>)

    return (
        <section>
            <div className="scroll-bar"
                style={{ width: `${scrollPercent}%` }}>
            </div>
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
                    productData.length === 100
                        ? <p>You have reached 100 results!</p>
                        : ""
                }
            </ul>
            <button onClick={handleLoadMore}
                disabled={productData.length === 100}>
                Load More
            </button>
        </section>
    )
}
export default ScrollIndicator