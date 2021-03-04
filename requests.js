
//*****  Payment *****/
const payment = {
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



//*****  Refund *****/ Note this is a referenced refund and needs original transaction data
const refund = {
    messageHeader: {
        messageClass: "Service",
        messageType: "Request",
        pOIID: "V400cPlus-402023788",
        protocolVersion: "3.0",
        saleID: "DemoCashRegisterID",
        serviceID: Math.floor(Math.random() * Math.floor(10000000)).toString(),
        messageCategory: "Reversal"
    },
    reversalRequest:{
        originalPOITransaction:{
            pOITransactionID:{
               transactionID:"8424683", //get id from origimal transaction 
               timeStamp:"2021-03-03T19:48:42.092Z", //get timestamp of original transaction 
            },
        },
        reversalReason:"MerchantCancel"
    }
}




//*****  Login *****/
const login = {
    messageHeader: {
        messageClass: "Service",
        messageType: "Request",
        pOIID: "V400cPlus-402023788",
        protocolVersion: "3.0",
        saleID: "DemoCashRegisterID",
        serviceID: Math.floor(Math.random() * Math.floor(10000000)).toString(),
        messageCategory: "Login"
    },
    loginRequest:{  
        dateTime:new Date().toISOString(),
        saleSoftware:{  
            manufacturerID:"Adyen",
            applicationName:"TEST APP",
            softwareVersion:"1.0",
            certificationCode:""
        },
        saleTerminalData:{  
            totalsGroupID:"GroupA"
        },
        operatorLanguage:"en",
        operatorID:"Luke"
    } 
};



//*****  Logout *****/
const logout = {
    messageHeader: {
        messageClass: "Service",
        messageType: "Request",
        pOIID: "V400cPlus-402023788",
        protocolVersion: "3.0",
        saleID: "DemoCashRegisterID",
        serviceID: Math.floor(Math.random() * Math.floor(10000000)).toString(),
        messageCategory: "Logout"
    },
    logoutRequest:{
  
    }
};



//*****  Print Receipt *****/
//may need to remove special characters from line items for this to work
const printReceipt = {
    messageHeader:{
        messageClass:"Service",
        messageType:"Request",
        pOIID: "V400cPlus-402023788",
        protocolVersion:"3.0",
        saleID:"DemoCashRegisterID",
        serviceID: Math.floor(Math.random() * Math.floor(10000000)).toString(),
        messageCategory:"Print",    
    },
    printRequest:{
        printOutput:{
            outputContent:{
                outputText:[
                    {
                        color:"White",
                        characterWidth:"SingleWidth",
                        characterHeight:"SingleHeight",
                        characterStyle:"Bold",
                        alignment:"Centred",
                        endOfLineFlag:true,
                        text:"Hi Luke"
                    },
                    {
                        color:"White",
                        characterWidth:"SingleWidth",
                        characterHeight:"SingleHeight",
                        characterStyle:"Normal",
                        alignment:"Left",
                        endOfLineFlag:true,
                        text:"Some explanation about the receipt(# %^& @/: $ Ä)"
                    },
                    {
                        color:"White",
                        characterWidth:"SingleWidth",
                        characterHeight:"SingleHeight",
                        characterStyle:"Normal",
                        alignment:"Left",
                        endOfLineFlag:true,
                        text:"More special characters (‰ƒˆ÷¸‹ﬂ)"
                    },
                    {
                        color:"White",
                        characterWidth:"SingleWidth",
                        characterHeight:"SingleHeight",
                        characterStyle:"Normal",
                        alignment:"Left",
                        endOfLineFlag:true,
                        text:""
                    }
                ],
                outputFormat:"Text"
            },
            documentQualifier:"Document",
            responseMode:"PrintEnd"
        }
    }
}


module.exports = {
    payment,
    refund,
    login,
    logout,
    printReceipt
 } 

//(# %^& @/: $ Ä)  
//(‰ƒˆ÷¸‹ﬂ)

