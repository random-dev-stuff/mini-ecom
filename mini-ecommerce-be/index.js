const express = require("express");
const cors = require("cors");
const z = require("zod");
const { pgClient } = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  price: z.string().min(1, "Price must be greater than 0"),
  description: z.string().min(1, "Description is required"),
  image_url: z.string().url("Must be a valid URL").optional(),
});

app.post("/api/products", async (req, res) => {
  const parseResult = productSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({ error: parseResult.error.errors });
  }

  const { name, price, description, image_url } = parseResult.data;

  try {
    const result = await pgClient.query(
      "INSERT INTO products (name, price, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, price, description, image_url]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding product");
  }
});

app.get("/api/all-products", async (req, res) => {
  try {
    const result = await pgClient.query("SELECT * FROM products");

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching products");
  }
});

app.get("/api/product", async (req, res) => {
  const search = req.query.search;

  try {
    const query = `
      SELECT * FROM products
      WHERE LOWER(name) LIKE LOWER($1)
    `;
    const values = [`%${search}%`];

    const result = await pgClient.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001);
