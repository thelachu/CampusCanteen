# Campus Canteen

**Project Status: Under Development**

Campus Canteen is a full-stack web application designed to simplify
college canteen food ordering and management.

> **Note:** This project is currently under development. Features,
> UI improvements, backend APIs, and integrations are being actively added.
>
> 
##  API Endpoints

### Authentication

| Method | Endpoint | Description |
|:---:|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

---

### User APIs

| Method | Endpoint | Description |
|:---:|---|---|
| GET | `/api/v1/menu-items` | Get available menu items |
| GET | `/api/v1/menu-items/{id}` | Get menu item by ID |
| GET | `/api/v1/menu-items/category/{category}` | Get menu items by category |

---

###  Menu Management APIs

| Method | Endpoint | Description |
|:---:|---|---|
| POST | `/api/v1/menu-items` | Add a new menu item |
| PUT | `/api/v1/menu-items/{id}` | Update a menu item |
| DELETE | `/api/v1/menu-items/{id}` | Delete a menu item |
| PATCH | `/api/v1/menu-items/{id}/availability` | Update item availability |

---

### Cart APIs

| Method | Endpoint | Description |
|:---:|---|---|
| GET | `/api/v1/cart/{userId}` | Get user's cart |
| POST | `/api/v1/cart/{userId}/items/{menuItemId}` | Add item to cart |
| PATCH | `/api/v1/cart/{userId}/items/{menuItemId}/increase` | Increase item quantity |
| PATCH | `/api/v1/cart/{userId}/items/{menuItemId}/decrease` | Decrease item quantity |
| DELETE | `/api/v1/cart/{userId}/items/{menuItemId}` | Remove item from cart |
| DELETE | `/api/v1/cart/{userId}/clear` | Clear user's cart |

---

### Order APIs

| Method | Endpoint | Description |
|:---:|---|---|
| POST | `/api/v1/orders` | Place a new order |
| GET | `/api/v1/orders/my` | Get user's orders |
| GET | `/api/v1/orders/{id}` | Get order details by ID |

---

### Admin APIs

#### Order Management

| Method | Endpoint | Description |
|:---:|---|---|
| GET | `/api/v1/admin/orders` | Get all orders |
| PATCH | `/api/v1/admin/orders/{id}/status` | Update order status |

#### User Management

| Method | Endpoint | Description |
|:---:|---|---|
| GET | `/api/v1/admin/users` | Get all users |
| GET | `/api/v1/admin/users/{id}` | Get user by ID |
| DELETE | `/api/v1/admin/users/{id}` | Delete user |

#### Dashboard

| Method | Endpoint | Description |
|:---:|---|---|
| GET | `/api/v1/admin/dashboard/stats` | Get dashboard statistics |
| GET | `/api/v1/admin/dashboard/sales` | Get sales data |
| GET | `/api/v1/admin/dashboard/popular-items` | Get popular menu items |
| GET | `/api/v1/admin/dashboard/recent-orders` | Get recent orders |
