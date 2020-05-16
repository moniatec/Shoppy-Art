* users
  * GET /users/:id => get a single user info (returns fullName and email)
  * POST /users => create a new user (returns userId and token)
  * POST /users/token => verifies user login and returns token for the user
  * GET /users/:id/orders => get the list of orders for a user.

* Products
  * GET /products => get a list of the products
  * GET /products/search/productName => get a list of the products matching the name or/and description 
  * GET /products/:productId => get a full description for a single product
  * Put /products/productId => update order/sold status for a product

* Orders
  * GET /orders/:orderId => get detailed overview of an order with orderId
  * POST /orders => create and order
  * PUT /orders/:orderId => update an order
  * DELETE /orders/orderId => delete and order for a user with orderId
 
  