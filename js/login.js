
//for loging in

// let log_error = ('incorrect input. Please try again');

let correct = ('Login Successfully');

let empty = ('Not a ragistered user');

let incorrect_name = ('Incorrect user name');

let incorrect_pass= ('Incorrecct passwold');

const log = (ev) => {

    ev.preventDefault();

    name = document.getElementById("log_first").value;
    pass = document.getElementById("log_pass").value;

    var namelog = ('stephen');

	var passlog = ('stephen');

    console.log(namelog);
    console.log(passlog);

    // if(name === user_name && pass === user_pass){
    if(name === namelog && pass === passlog){

        // console.log('login successfully')
        console.warn('correct');
    

        let pre = document.querySelector('#msg pre');
       
        pre.textContent = JSON.stringify(correct, '\t', );

        console.log(name);

        for (i = 0; i < 55000; ++i){
            window.location.href = "admin.html";
        
	  	}

        console.log(name);

    }

    else if(name != namelog){

        console.warn('incorrect user name');

        let pre = document.querySelector('#msg pre');

        pre.textContent = JSON.stringify(incorrect_name, '\t', );

        console.log(name);

    }

    else if(name != passlog){

        console.warn('incorrect passwold');

        let pre = document.querySelector('#msg pre');

        pre.textContent = JSON.stringify(incorrect_pass, '\t', );

        console.log(pass);

    }

    else if(name === '' && pass === ''){

        // console.log('login successfully')
        console.warn('error');

        let pre = document.querySelector('#msg pre');

        pre.textContent = JSON.stringify(empty, '\t', );

        console.log(name);

    }

    else{

        // console.log('login successfully')
        console.warn('error');

        let pre = document.querySelector('#msg pre');

        pre.textContent = JSON.stringify(empty, '\t', );

        console.log(name);

    }

}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('log_but').addEventListener('click', log);
})
