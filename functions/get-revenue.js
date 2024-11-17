exports.handler = async function(event, context) {
    const revenueData = [
      { "date": "2024-11-01", "revenue": 15000 },
      { "date": "2024-11-02", "revenue": 17000 },
      { "date": "2024-11-03", "revenue": 16000 },
      { "date": "2024-11-04", "revenue": 18000 }
    ];
    const headers = {
      "Access-Control-Allow-Origin": "*", // Allows all origins
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allowed methods
      "Access-Control-Allow-Headers": "Content-Type", // Allowed headers
    };
  
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ revenue: revenueData })
    };
  };
  