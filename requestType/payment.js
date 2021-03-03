
  const paymentRequest = {
      messageHeader: {
        messageClass: "Service",
        messageType: "Request",
        pOIID: "V400cPlus-402023788",
        protocolVersion: "3.0",
        saleID: "DemoCashRegisterID",
        serviceID: Math.floor(Math.random() * Math.floor(10000000)).toString(),
        messageCategory: "Payment"
      },
      paymentRequest: {
          saleData: {
          saleTransactionID: {
            transactionID: Math.floor(Math.random() * Math.floor(10000000)).toString(), // Random payment reference
            timeStamp: new Date().toISOString()
          }
        },
        paymentTransaction: {
          amountsReq: {
            currency: "EUR",
            requestedAmount: parseFloat((Math.random() * (40)).toFixed(2)) // random amount
          }
        }  
      }
      
    };


 exports.paymentRequest = paymentRequest