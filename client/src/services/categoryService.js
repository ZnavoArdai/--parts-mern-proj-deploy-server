
export const getCategory = async() => {
 
    const respo=await fetch("https://parts-server-znavoo.onrender.com/category");

    const category=await respo.json();
    return category;
}
