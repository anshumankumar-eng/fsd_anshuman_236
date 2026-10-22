
const getproductsData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}
const HeaderComponent = () => {
    return (<div style={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white"
    }}>
        <h1>E-commerce Webpage</h1>
    </div>)
}
const ProductComponent = ({ products }) => {
    // console.log(products);
    return (<div id="prod-container">
        {products.map((product) =>
            <div>
                <img src={product.thumbnail}></img>
                <h1>{product.title}</h1>
            </div>)}
    </div>)
}
const FooterComponent = () => {
    return (<div style={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white"
    }}>
        <h1>Copyright all rights are reserved.</h1>
    </div>)
}

const App = async () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    let products = await getproductsData()
    const reactElement = <>
        <HeaderComponent />
        <ProductComponent products={products} />
        {FooterComponent()}
    </>
    root.render(reactElement);
}

App();