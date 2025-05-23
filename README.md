# Web App Project Submission Mini E-Commerce Platform with Two TabsGoal

Build a simple e-commerce web application with two main tabs — one for submitting products, and one for viewing submitted products, with an optional smart search feature.

## Setup Instructions

### Frontend

1. Clone the repository

   ```bash
   git clone https://github.com/random-dev-stuff/mini-ecom.git
   cd mini-ecom

   ```

2. Install Dependencies

   ```bash
   npm install

   ```

3. Run the development server

   ```bash
   npm run dev

   ```

   The app will be running at [http://localhost:3000](http://localhost:3000)

### Backend Setup

1. Navigate to Backend Folder

   ```bash
   cd mini-ecommerce-be
   ```

2. Copy '.env.example' file to `.env`

3. Set up the PostgreSQL database
   Create a PostgreSQL database and add the necessary configuration to the `.env` file

4. Install Dependencies

   ```bash
   npm install
   ```

5. Run the backend server

   ```bash
   node index.js
   ```

   The server will be running at [http://localhost:3001](http://localhost:3001)

## Screenshots
![image](https://github.com/user-attachments/assets/eee0693a-50b8-474d-83e4-87905a0b8b4c)
![image](https://github.com/user-attachments/assets/ded58640-d72e-4cc9-9992-dfeebb207d43)
![image](https://github.com/user-attachments/assets/fa3b61a3-5532-432a-b1c0-444459e51d88)


## What's Working

- Users can add products with a title, price, description, and image URL.

- Products can be searched by title.

- Users can view a list of all available items.

- All product data is stored in a PostgreSQL database.
