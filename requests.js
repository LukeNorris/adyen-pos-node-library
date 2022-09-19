
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
               transactionID:"8UTk001614871084004.863614871094304H", //get id from origimal transaction
               timeStamp:"2021-03-04T15:18:04.000Z", //get timestamp of original transaction
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
                        text:"Some explanation about the receipt(# %^& @/: $ Äöäü)"
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


//*********** Split Payment with tipping ***********
const splitPayment = {
  messageHeader: {
      protocolVersion:"3.0",
      messageClass:"Service",
      messageCategory:"Payment",
      messageType:"Request",
      saleID:"DemoCashRegisterID",
      serviceID: Math.floor(Math.random() * Math.floor(10000000)).toString(),
      pOIID:"V400cPlus-402023788"
    },
    paymentRequest: {
      saleData: {
        saleTransactionID: {
          transactionID: "9820s",
          timeStamp: new Date().toISOString()
        },
       saleToAcquirerData: "tenderOption=RecieptHandler&tenderOption=AskGratuity",
       saleReferenceID: "saleReferenceID"

      },
      paymentTransaction: {
        amountsReq: {
          currency: "EUR",
          requestedAmount: 15,
          paidAmount: 0
        }
      },
      paymentData: {
        paymentType: "Normal",
        splitPaymentFlag: true
      }
  }
}


const cardAcquisition = {
        messageHeader: {
            protocolVersion:"3.0",
            messageClass:"Service",
            messageCategory:"CardAcquisition",
            messageType:"Request",
            saleID:"DemoCashRegisterID",
            serviceID: Math.floor(Math.random() * Math.floor(10000000)).toString(),
            pOIID:"V400cPlus-402023788"
          },
        cardAcquisitionRequest: {
            saleData: {
                saleTransactionID: {
                    transactionID: "card-acquistion-test",
                    timeStamp: "2021-04-07T19:30:03.000Z"
                },
                tokenRequestedType:"Customer"
            },
            cardAcquisitionTransaction: {
                totalAmount: 10
            }
      }
}


    const cardAcquisitionPayment = {
        messageHeader: {
            protocolVersion:"3.0",
            messageClass:"Service",
            messageCategory:"Payment",
            messageType:"Request",
            saleID:"DemoCashRegisterID",
            serviceID: Math.floor(Math.random() * Math.floor(10000000)).toString(),
            pOIID:"V400cPlus-402023788"
          },
        paymentRequest: {
            saleData: {
                saleTransactionID: {
                    transactionID: "card-acquistion-test",
                    timeStamp: new Date().toISOString(),
                },
                saleToAcquirerData:"shopperEmail=S.email@example.com&shopperReference=" + Math.floor(Math.random() * Math.floor(10000000)).toString() + "_reference",
                tokenRequestedType:"Customer"
            },
            paymentTransaction: {
                amountsReq: {
                    currency: "EUR",
                    requestedAmount: 10
                }
            },
            paymentData: {
                cardAcquisitionReference: {
                    timeStamp: "2021-04-07T19:30:03.000Z",
                    transactionID: "card-acquistion-test"
                }
            }
        }
    }









module.exports = {
    payment,
    refund,
    login,
    logout,
    printReceipt,
    splitPayment,
    cardAcquisition,
    cardAcquisitionPayment
 }

//(# %^& @/: $ Ä)
//(‰ƒˆ÷¸‹ﬂ)
