

# Reviews and Ratings Web App

This is a simple full-stack web application that allows users to give **ratings** and **reviews** on a list of products. Each product displays its average rating and reviews submitted by users.


## Features

- Users can submit a **rating**, **review**, or both.
- One user can rate/review a product **only once**.
- All reviews and ratings are shown under each product.
- Basic **input validation** is handled properly.


##  Tech Stack

### 🚀 Frontend
- React.js
- HTML, CSS, JavaScript

### 🌐 Backend
- Node.js
- Express.js
- REST APIs

###  Database
- MySQL

## 📁 Folder Structure

- /frontend => React frontend code
- /backend => Node.js Express backend



##  Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/purvathnere/ReviewsAndRatings.git
   cd ReviewsAndRatings
   ```
Start Backend

```cd backend
npm install
node index.js
```
Server runs at: http://localhost:3001

Start Frontend

```
cd frontend
npm install
npm start
```

App runs at: http://localhost:3000

## Database

### Database Setup (MySQL)
🔧 Step 1: Create the Database
Open MySQL and run:

```
CREATE DATABASE IF NOT EXISTS product_reviews;
```

🧱 Step 2: Create Tables
```
USE product_reviews;

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);

CREATE TABLE reviews (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  user VARCHAR(100),
  rating INT,
  review TEXT,
  photo_url TEXT,
  UNIQUE KEY unique_user_review (product_id, user)
);
```
 Step 3: Configure DB Connection
In backend/db.js, update:

```
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword', 
  database: 'product_reviews'
});
```



 

## Future Enhancements
- JWT-based user authentication

- Tag analysis using NLP

- Image upload support (Multer + Cloud storage)

- Admin dashboard

- Responsive UI for mobile devices



