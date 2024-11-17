exports.handler = async function(event, context) {
    const salesData = [
      { "month": "January", "total": 5000 },
      { "month": "February", "total": 7000 },
      { "month": "March", "total": 8000 },
      { "month": "April", "total": 6000 },
      { "month": "May", "total": 9000 }
    ];
  
    return {
      statusCode: 200,
      body: JSON.stringify({ sales: salesData })
    };
  };
  