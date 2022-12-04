

export const getOrders =async () => {

    const respo=await fetch("https://parts-server-znavoo.onrender.com/orders");

    const orders=await respo.json();
    return orders;
}
