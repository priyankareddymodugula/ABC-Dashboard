exports.handler = async function(event, context) {
    const salesData = [
      { "month": "January", "total": 5000 },
      { "month": "February", "total": 7000 },
      { "month": "March", "total": 8000 },
      { "month": "April", "total": 6000 },
      { "month": "May", "total": 9000 }
    ];
    const headers = {
      "Access-Control-Allow-Origin": "*", // Allows all origins
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allowed methods
      "Access-Control-Allow-Headers": "Content-Type", // Allowed headers
    };
  
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ sales: salesData })
    };
  };
  