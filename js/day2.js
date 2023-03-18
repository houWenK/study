
    function clicks(){
        console.log("111")
        var user="";
        var password="";
        user=document.getElementById('user').value;
        password=document.getElementById('password').value;
        if(user=="root" && password=="123abc")
        {
        document.getElementById('istrue').innerText="true"
        }
        else
        {
        document.getElementById('istrue').innerText="false"
        }
    }


    function sumClick(){
        console.log("222")
        chinesegrade=document.getElementById('chinesegrade').value;
        mathgrade=document.getElementById('mathgrade').value;
        document.getElementById('chinesegrade_text').innerText=chinesegrade;
        document.getElementById('mathgrade_text').innerText=mathgrade;
        document.getElementById('sumgrade_text').innerText=Number(mathgrade)+Number(chinesegrade);
    }
