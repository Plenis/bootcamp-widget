function totalPhoneBill(){
    return {
        userInput: '',
        total: 0,

        billTotal(){
            var call = [];
            var sms = []; 
            const bill = this.userInput;
           
             bill = bill.split(', ');
             for (var i=0;i<bill.length;i++){
                var total = bill[i];
               
               if ('sms' === total){
                 sms.push(total)
               }
               else if ('call' === total){
                 call.push(total)
             }
             }
             var totalBill = (sms.length * 0.65) + (call.length * 2.75)
             console.log(totalBill)
             this.total = totalBill.toFixed(2);
        }
    }
   }   