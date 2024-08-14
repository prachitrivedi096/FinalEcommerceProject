# Getting Started with Create React App
Student Name: Prachi Trivedi
Student Number: 8955448
Date: 2024-07-19

# Technology stack
Frontend: ReactJs
Backend: Node.js
Database: MongoDB (Atlas)

# Database Schema Design
Attached screenshot in zip (image.png)

# Github URL
https://github.com/prachitrivedi096/FinalEcommerceProject/

# Backend Configured
npm install express mongoose cors

# Frontend Configured
npm i

## To run the project
cd frontend
npm start

## To start server
cd backend
node server.js

# URL to run Admin Panel
http://localhost:3000/admin/login

# URL to run User
- http://localhost:3000/
- http://localhost:3000/user

## Manual Test Cases
### 1. Show Products
- **Description**: Verify that the products page displays a list of available products.
- **Steps**:
  1. Navigate to `/products`.
  2. Ensure that the page loads successfully.
  3. Verify that the product list contains at least one product.
  4. Check that product details (image, name, price, category and description) are displayed correctly.
- **Expected Result**: The products page should display a list of products with accurate details.

### 2. Create a Product
- **Description**: Test the functionality of creating a new product.
- **Steps**:
  1. Navigate to `/products/create`.
  2. Fill in the product creation form with valid data.
  3. Submit the form.
  4. Verify that the new product is added to the products list.
- **Expected Result**: The product should be successfully created and listed on the products page.

### 3. Admin Login - Successful Login
- **Description**: Verify that an admin can log in with valid credentials.
- **Steps**:
  1. Navigate to `/admin/login`.
  2. Enter valid admin username = admin and password = admin123.
  3. Click the "Login" button.
  4. Ensure that the admin is redirected to the dashboard.
- **Expected Result**: Admin should be successfully logged in and redirected to the dashboard.

### 4. Admin Login - Invalid Credentials
- **Description**: Verify that an error message is displayed when logging in with invalid credentials.
- **Steps**:
  1. Navigate to `/admin/login`.
  2. Enter an invalid admin username or password.
  3. Click the "Login" button.
  4. Check that an error message such as "Invalid username or password" is displayed.
- **Expected Result**: An appropriate error message should be displayed, and the admin should remain on the login page.

### 5. Admin Login - Empty Fields
- **Description**: Verify that an error message is displayed when attempting to log in with empty username or password fields.
- **Steps**:
  1. Navigate to `/admin/login`.
  2. Leave the username or password field empty.
  3. Click the "Login" button.
  4. Check that an error message indicating that the fields cannot be empty is displayed.
- **Expected Result**: An appropriate error message should be displayed, and the admin should remain on the login page.

### 6. Remove from Cart
- **Description**: Verify that the "Remove from Cart" button correctly removes an item from the shopping cart.
- **Steps**:
  1. Navigate to `/user/shoppingcart`.
  2. Ensure there is at least one item in the cart.
  3. Click the "Remove from Cart" button next to an item.
  4. Confirm that the item is removed from the cart.
- **Expected Result**: The selected item should be removed from the cart.

### 7. Checkout
- **Description**: Verify that the "Checkout" button redirects the user to the checkout page.
- **Steps**:
  1. Navigate to `/user/shoppingcart`.
  2. Ensure there is at least one item in the cart.
  3. Click the "Checkout" button.
  4. Ensure that the user is redirected to the `/checkout` page.
- **Expected Result**: The user should be redirected to the checkout page with the correct order summary.

### 8. Submit Checkout Form with Valid Data
- **Description**: Verify that the checkout form is submitted successfully when valid data is provided for the name, address, and email fields.
- **Steps**:
  1. Navigate to `/checkout`.
  2. Enter a valid name, address, and email in the respective fields.
  3. Click the "Submit" button.
  4. Ensure that the form is submitted successfully and the user is redirected to the order confirmation page.
  5. Verify that the order summary reflects the entered information.
- **Expected Result**: The checkout form should be submitted successfully, the user should be redirected to the order confirmation page, and the order summary should display the correct details.

### 9. Submit Checkout Form with Invalid Email
- **Description**: Verify that an error message is displayed when the checkout form is submitted with an invalid email address.
- **Steps**:
  1. Navigate to `/checkout`.
  2. Enter a valid name and address, but enter an invalid email (e.g., "invalidemail.com" without "@" or ".com").
  3. Click the "Submit" button.
  4. Check that an error message is displayed indicating the email is invalid.
  5. Ensure that the form is not submitted, and the user remains on the checkout page.
- **Expected Result**: An error message should be displayed for the invalid email, and the form should not be submitted.


### 10. Display Home page with Products, "Add to Cart" and "View Details" Buttons
- **Description**: Verify that the `/user` page displays a list of products, each with "Add to Cart" and "View Details" buttons.
- **Steps**:
  1. Navigate to `/user`.
  2. Ensure that the home page loads successfully and displays a list of products.
  3. For each product, verify that both the "Add to Cart" and "View Details" buttons are visible.
  4. Click the "Add to Cart" button to ensure that the product is added to the shopping cart.
  5. Click the "View Details" button to ensure that it redirects to the product details page.
- **Expected Result**: The `/user` page should display a list of products, each with "Add to Cart" and "View Details" buttons that function correctly.