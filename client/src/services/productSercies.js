
export const getProudcts=async()=>{

   const respo=await fetch("https://parts-server-znavoo.onrender.com/products");


   const products=await respo.json()

   return products
}



