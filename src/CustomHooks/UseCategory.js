import axios from "axios"
import { Navigate } from "react-router-dom";



export let UseCategory = async(Category)=>{
    try {
        const { data } = await axios.get(
          import.meta.env.VITE_PRODUCTS_API_LINK+`?populate=*&filters[category][$eq]=${Category}`
        );
        console.log(data?.data);
       Navigate('/category/category')
      } catch (error) {
        console.error("Error fetching products:", error);
      }
}