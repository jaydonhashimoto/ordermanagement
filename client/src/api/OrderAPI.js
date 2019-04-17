import axios from 'axios';

/**
 * GET orders from API
 * @method GET
 * @return orders
 */
export const getOrders = () => {
    return axios
        .get('/api/orders/')
        .then(res => {
            const orders = res.data;
            //console.log(orders);
            return orders;
        })
        .catch((err) => {
            console.log(err);
        });
    //return orders;
}

/**
 * GET order from API
 * @param id 
 * @return order
 */
export const getOrder = (id) => {
    axios
        .get('', {
            params: {
                ID: id
            }
        })
        .then((res) => {
            const order = res.data;
            return order;
        })
        .catch((err) => {
            console.log(err);
        });
}

/**
 * add order to db through API
 * @method POST
 * @param order
 */
export const addOrder = (order) => {
    axios.post('/api/orders/', {
        name: order.name,
        price: order.price,
        quantity: order.quantity,
        description: order.description
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    // console.log(order);
}

/**
 * POST id to delete order API
 * @method POST
 * @param id 
 */
export const deleteOrder = (id) => {
    axios.post(`/api/orders/${id}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}

/**
 * POST order to update order API
 * @method POST
 * @param order 
 */
export const updateOrder = (order) => {
    axios.post(`api/orders/update/${order._id}`, {
        name: order.name,
        price: order.price,
        quantity: order.quantity,
        description: order.description
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}
