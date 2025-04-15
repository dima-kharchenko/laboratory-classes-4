const Product = require("../models/Product");
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

const getProductsView = (_request, response) => {
    const products = Product.getAll()
    response.render("products", {headTitle: "Shop - Products", menuLinks: MENU_LINKS, path: "/products", activeLinkPath: "/products", products})
};

const getAddProductView = (_request, response) => {
    response.render("add-product", {headTitle: "Shop - Add Product", menuLinks: MENU_LINKS, path: "/products/add", activeLinkPath: "/products"})
};

const addNewProduct = (request, response) => {
    const { name, description } = request.body;
    const newProduct = new Product(name, description)
    Product.add(newProduct)
    response.redirect("/products/new");
};

const getNewProductView = (_request, response) => {
    const newestProduct = Product.getLast()
    response.render("new-product", {headTitle: "Shop - New Product", menuLinks: MENU_LINKS,path: "/products/new", activeLinkPath: "/products/new", newestProduct})
};

const getProductView = (request, response) => {
    const product = Product.findByName(request.params.productName)
    response.render("product", {headTitle: `Product: ${product.name}`, menuLinks: MENU_LINKS, path: `/products/${product.name}`, activeLinkPath: "/products", product})
};

const deleteProduct = (request, response) => {
    Product.deleteByName(request.params.productName)
    response.status(STATUS_CODE.OK).json({ success: true })
};

module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct
};
