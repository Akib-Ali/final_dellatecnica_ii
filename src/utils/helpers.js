import axios from "axios";

export const fetchProduct = async (slug) => {
    try {
        const response = await axios.get('/server.json');
        const products = response.data.projects;
        const matchedProduct = products.find((p) => p.slug === slug)
        return matchedProduct;
    } catch (error) {
        console.log(error);
        return null;
    }
}