

 document.getElementById("submit").onclick =  function getLoan(){
    let principle = Number(document.getElementById("loanamount").value);
    let time = Number(document.getElementById("timeinyear").value);

    let con1 = document.getElementById("homeloan");
    let con2 = document.getElementById("studentloan");
   
    let intrest;
    let sum;

    let result = document.getElementById("result1");
    let result2 = document.getElementById("result2");

         
    if (con1.checked) {
        intrest = (principle * time * 10) / 100;
    } else if (con2.checked) {
        intrest = (principle * time * 7) / 100;
    } else {
        console.log("Error! Try again");
        result.textContent = "";
        result2.textContent = "";
        alert("Select Loan Type");
        return; // Exit the function if no loan type is selected
    }
   sum = principle + intrest ;

   result.textContent = `Your Interest will be Rs. ${intrest}`;
   result2.textContent = `Your total sum will be Rs. ${sum}`;
 };