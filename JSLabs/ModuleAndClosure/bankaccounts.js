window.onload = function(){
    document.getElementById("create").onclick = this.createAccount
}
var account = {
    name:"", 
    balance : ""
}

var accountInfoList=[]
function createAccount(){
    var accName = document.getElementById("accountName").value;
    var accBalance = document.getElementById("accountNumber").value; 
    var acc =  {name:accName, balance:accBalance}; 
    var acc = Object.create(acc)

    accountInfoList.push(acc); 

    diplayChange()
}

function diplayChange(){
    console.log(accountInfoList)
    var report = []
    for(account in accountInfoList){
        report.push("Account Name: "+accountInfoList[account].name +" Account Balance: "+accountInfoList[account].balance)
    }

    document.getElementById("accounts").value = report.join("\n")
}