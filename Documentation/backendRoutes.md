* users
  * GET /users/:id => get a single users info (returns fullName and email)
  * POST /users => create a new user (returns userId and token)
  * POST /users/token => verifies user login and returns token for the user
* products
  * GET /products/:productId => get a full description for a single product

* Products
  * GET /products => get a list of the products
  * GET /products/search/productName => get a list of the products matching the name or/and description 
  * GET /products/:productId => get a full description for a single product

* Orders
  * GET /orders => get a list of orders for a user
  * GET /orders/:orderId => get detailed overview of an order with orderId
  