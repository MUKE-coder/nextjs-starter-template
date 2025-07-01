# Next.js API Routes Documentation

This project includes built-in Next.js API routes that provide a complete backend for the e-commerce application.

## Available Endpoints

### Categories

#### GET /api/categories

Returns all categories.

**Response:**

```json
[
  {
    "id": "cat-001",
    "name": "Electronics",
    "slug": "electronics",
    "image": "https://images.unsplash.com/..."
  }
]
```

#### POST /api/categories

Creates a new category.

**Request Body:**

```json
{
  "name": "New Category",
  "slug": "new-category",
  "image": "https://images.unsplash.com/..."
}
```

**Response:**

```json
{
  "id": "cat-123456789-456",
  "name": "New Category",
  "slug": "new-category",
  "image": "https://images.unsplash.com/..."
}
```

#### GET /api/categories/[id]

Returns a specific category by ID.

### Products

#### GET /api/products

Returns paginated products with optional filtering.

**Query Parameters:**

- `limit` (number): Number of products per page (default: 10)
- `cursor` (string): Pagination cursor
- `categoryId` (string): Filter by category ID
- `search` (string): Search products by name or description

**Response:**

```json
{
  "data": [
    {
      "id": "prod-001",
      "name": "iPhone 15 Pro Max",
      "description": "The most advanced iPhone...",
      "price": 1199.99,
      "image": "https://images.unsplash.com/...",
      "categoryId": "cat-001"
    }
  ],
  "hasMore": true,
  "nextCursor": "10",
  "total": 40
}
```

#### GET /api/products/[id]

Returns a specific product by ID.

#### GET /api/products/category/[categoryId]

Returns paginated products filtered by category.

**Query Parameters:**

- `limit` (number): Number of products per page (default: 10)
- `cursor` (string): Pagination cursor

### Statistics

#### GET /api/stats

Returns application statistics.

**Response:**

```json
{
  "totalCategories": 8,
  "totalProducts": 40,
  "productsPerCategory": [
    {
      "categoryId": "cat-001",
      "categoryName": "Electronics",
      "productCount": 5
    }
  ],
  "priceStats": {
    "min": 24.99,
    "max": 2499.99,
    "average": 289.25
  },
  "lastUpdated": "2025-07-01T12:00:00.000Z"
}
```

### Health Check

#### GET /api/health

Returns API health status.

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2025-07-01T12:00:00.000Z",
  "version": "1.0.0"
}
```

## Features

### 🚀 Performance

- **Simulated Network Latency**: Realistic API response times
- **Pagination**: Efficient data loading with cursor-based pagination
- **Filtering**: Search and category filtering capabilities

### 🛡️ Error Handling

- **Proper HTTP Status Codes**: 200, 201, 400, 404, 409, 500
- **Detailed Error Messages**: Clear error descriptions
- **Validation**: Input validation for POST requests

## Usage Examples

### Basic Product Fetching

```javascript
// Fetch first 10 products
const response = await fetch("/api/products?limit=10");
const data = await response.json();

// Fetch next page
const nextResponse = await fetch(
  `/api/products?limit=10&cursor=${data.nextCursor}`
);
```

### Category Filtering

```javascript
// Get electronics products
const response = await fetch("/api/products?categoryId=cat-001");
const electronicsProducts = await response.json();
```

### Search Functionality

```javascript
// Search for "iPhone"
const response = await fetch("/api/products?search=iPhone");
const searchResults = await response.json();
```

### Create New Category

```javascript
const response = await fetch("/api/categories", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Smart Home",
    slug: "smart-home",
    image: "https://images.unsplash.com/photo-example",
  }),
});
const newCategory = await response.json();
```
