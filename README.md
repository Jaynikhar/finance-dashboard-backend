# Finance Dashboard Backend API

A scalable backend system built for managing financial records, user roles, and analytics. Designed with clean architecture, role-based access control, and real-world backend practices.

---

## Features

###  Authentication & Authorization
- JWT-based authentication
- Role-Based Access Control (RBAC)
  - Viewer: Read-only access
  - Analyst: Access analytics
  - Admin: Full control

---

### Financial Records
- Create, update, delete transactions
- Fields: amount, type, category, date, note
- Filtering by category and type
- Pagination support

---

###  Dashboard Analytics
- Total income & expenses
- Net balance
- Category-wise aggregation
- Monthly analytics

---

###  Backend Quality
- Input validation middleware
- Centralized error handling
- Clean MVC architecture

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Records
- GET `/api/records`
- POST `/api/records`
- PUT `/api/records/:id`
- DELETE `/api/records/:id`

### Analytics
- GET `/api/records/summary`
- GET `/api/records/category-summary`
- GET `/api/records/monthly`


# ## Screenshots

# ### Swagger API Docs
# ![Swagger](./screenshots/swagger.png)

# ### Records API Response
# ![Records](./screenshots/records-response.png)
# ![UpdateRecords](./screenshots/update-records.png)

# ### Analytics Dashboard
# ![Analytics](./screenshots/analytics-api.png)
# ![AnalyticsResponse](./screenshots/analytics-response.png)



# ###  Authorization
# ![Auth](./screenshots/auth-records-user-api.png)
# ![Authorization](./screenshots/authorization.png)
# ![Userregistered](./screenshots/user-registered.png)

---

## Setup Instructions

```bash
git clone https://github.com/Jaynikhar/finance-dashboard-backend.git
cd finance-dashboard-backend
npm install

