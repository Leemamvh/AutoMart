const myFunctions = () => {
    
    document.getElementById("signin-info").addEventListener("click", (e) => {
    //hide  the signup form
    document.getElementById("sign-up").style.display = 'none'
        //show signin form  
        document.getElementById("sign-in").style.display = ''
    })
        document.getElementById("signup-info").addEventListener("click", (e) => {
            
            document.getElementById("sign-in").style.display = 'none'
                 
                document.getElementById("sign-up").style.display = ''
    })

}  
