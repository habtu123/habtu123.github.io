window.onload = function(){
    document.getElementById("create").onclick = account.createAccount
}

var accountInfoList=[]; 
var account = (function (){

    createAccount =  function (){
        console.log("create account")
        var accName = document.getElementById("accountName").value;
        var accBalance = document.getElementById("accountNumber").value; 
        var acc =  {name:accName, balance:accBalance}; 
        accountInfoList.push(acc); 

    return diplayChange()
    }; 

    diplayChange =  function(){
        console.log(accountInfoList)
        var report = []
        for(account in accountInfoList){
            report.push("Account Name: "+accountInfoList[account].name +" Account Balance: "+accountInfoList[account].balance)
        }

        document.getElementById("accounts").value = report.join("\n")
    }; 

return {
    createAccount
}
})(); 

