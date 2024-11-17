exports.handler = async function(event, context) {
    const customersData = [
      { "region": "North", "count": 120 },
      { "region": "South", "count": 80 },
      { "region": "East", "count": 100 },
      { "region": "West", "count": 90 }
    ];
  
    return {
      statusCode: 200,
      body: JSON.stringify({ customers: customersData })
    };
  };
  