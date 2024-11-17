exports.handler = async function(event, context) {
    const inventoryData = [
      { "product": "Product A", "quantity": 50, "status": "In Stock" },
      { "product": "Product B", "quantity": 0, "status": "Out of Stock" },
      { "product": "Product C", "quantity": 20, "status": "Low Stock" },
      { "product": "Product D", "quantity": 100, "status": "In Stock" }
    ];
    const headers = {
      "Access-Control-Allow-Origin": "*", // Allows all origins
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allowed methods
      "Access-Control-Allow-Headers": "Content-Type", // Allowed headers
    };
  
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ inventory: inventoryData })
    };
  };
  