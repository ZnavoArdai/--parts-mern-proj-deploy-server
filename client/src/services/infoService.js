
export const getInfo =async () => {
 
    const respo= await fetch("https://parts-server-znavoo.onrender.com/info");

    const info= await respo.json();
    return info;

}
