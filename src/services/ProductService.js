import {
    httpServer
} from "../server";

export default class ProductService {

    static getAllProducts() {
        return httpServer.get('/products')
            .then(({
                data
            }) => data)
            .catch(err => console.log(err));
    }

    static updateProduct(product) {
        return httpServer.put(`/products/${product.id}`, product, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(({
                data
            }) => data)
            .catch(err => console.log(err));
    }

    static createProduct(product) {
        return httpServer.post(`/products/new_product`, product)
            .then(({
                data
            }) => data)
            .catch(err => console.log(err));
    }

    static updateProducts(product) {
        return httpServer.put(`/products/update_product`, product)
            .then(({
                data
            }) => data)
            .catch(err => console.log(err));
    }

    static deleteProduct(name) {
        return httpServer.delete(`/products/delete_product/${name}`)
            .then(({
                data
            }) => data)
            .catch(err => console.log(err));
    }

    static deleteProducts(products) {
        return httpServer.delete(`/products/delete_product`, products)
            .then(({
                data
            }) => data)
            .catch(err => console.log(err));
    }
}