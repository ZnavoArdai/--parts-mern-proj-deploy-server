
export const getStores =async () => {
 
    const respo=await fetch("https://parts-server-znavoo.onrender.com/stores");

    const stores=await respo.json()
    return stores
}

