# How to Update Products

The product data is now stored in a separate JSON file for easy maintenance.

## Location
`src/data/products.json`

## How to Add a New Product

1. Open `src/data/products.json`
2. Add a new product object to the array with the following structure:

```json
{
    "title": "Product Name",
    "description": "Product description",
    "category": "Movie|Music|Tools",
    "variants": [
        { 
            "name": "Variant name", 
            "price": 10000, 
            "originalPrice": 15000 
        }
    ]
}
```

## How to Update a Product

1. Open `src/data/products.json`
2. Find the product you want to update
3. Modify the fields (title, description, price, etc.)
4. Save the file
5. The changes will be reflected automatically (Next.js will hot-reload)

## How to Delete a Product

1. Open `src/data/products.json`
2. Remove the entire product object from the array
3. Save the file

## Field Descriptions

- **title**: The name of the service (e.g., "Netflix", "Spotify")
- **description**: A brief description of the service
- **category**: Must be one of: "Movie", "Music", or "Tools"
- **variants**: An array of subscription options
  - **name**: The variant name (e.g., "1 Bulan (Individual)")
  - **price**: The current price in IDR
  - **originalPrice**: (Optional) The original price for showing discounts

## Example

```json
{
    "title": "Netflix",
    "description": "Nonton film dan series favorit tanpa batas dengan kualitas terbaik.",
    "category": "Movie",
    "variants": [
        { "name": "1 Bulan (HP/Tablet)", "price": 42500, "originalPrice": 50000 },
        { "name": "1 Bulan (Smart TV)", "price": 55000, "originalPrice": 60000 }
    ]
}
```

## Notes

- Make sure to maintain valid JSON syntax (commas, brackets, quotes)
- The file will be validated automatically when the app runs
- If there's a syntax error, the app will show an error in the console
