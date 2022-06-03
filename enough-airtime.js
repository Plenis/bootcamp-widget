function enoughAirtime(usageLog, airtimeAmount){

  var data = [];
  var call = [];
  var sms = [];
  
  var usageSplit = usageLog.split(',');
//console.log(para1)
  
  for (var i=0; i<usageSplit.length; i++){
   var position = usageSplit[i];
  
  if (position == 'data'){
    data.push(position)
  }
  else if (position == 'call'){
    call.push(position)
 //   console.log(call)
 }
  else if(position == 'sms'){
    sms.push(position)
  // console.log(sms)
  }
  }
  
  var dataPrice = data.length * 12
  var callPrice = call.length * 1.88
  var smsPrice = sms.length * 0.75
  console.log(smsPrice)
  
  var total = dataPrice + callPrice + smsPrice;
 // console.log(total)
  
  var grandTotal = airtimeAmount - total;
//  console.log(grandTotal.toFixed(2))
  
  if (grandTotal > 0){
    return "R" + grandTotal.toFixed(2)
  }
  else{
    return "R0.00"
  }
}

