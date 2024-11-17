exports.handler = async function(event, context) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }
    const customersData = [
      { "region": "North", "count": 120 },
      { "region": "South", "count": 80 },
      { "region": "East", "count": 100 },
      { "region": "West", "count": 90 }
    ];
    const headers = {
      "Access-Control-Allow-Origin": "*", // Allows all origins
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allowed methods
      "Access-Control-Allow-Headers": "Content-Type", // Allowed headers
    };
  
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ customers: customersData })
    };
  };
  