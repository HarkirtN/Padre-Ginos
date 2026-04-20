export default async function getPastOrder(order) {
 const response = await (`/api/past-order/${order}`);
 const data = await response.JSON;
 return data;
};