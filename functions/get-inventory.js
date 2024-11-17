exports.handler = async function(event, context) {
    const inventoryData = [
      { "product": "Product A", "quantity": 50, "status": "In Stock" },
      { "product": "Product B", "quantity": 0, "status": "Out of Stock" },
      { "product": "Product C", "quantity": 20, "status": "Low Stock" },
      { "product": "Product D", "quantity": 100, "status": "In Stock" }
    ];
  
    return {
      statusCode: 200,
      body: JSON.stringify({ inventory: inventoryData })
    };
  };
  