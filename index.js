// Add your code here
function submitData(userName, userEmail){
    
    const configurationObject = {
        method : "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
            name : userName,
            email : userEmail
        }),
    };

    let body = document.querySelector('body');

    return fetch ("http://localhost:3000/users", configurationObject)
    .then(function (res){
        return res.json()
    })
    .then(function (data){
        let enterName = document.createElement('h3');
        let enterMail = document.createElement('h3');
        let newID = document.createElement('p');
        enterName.textContent = `Name : ${data.name}`;
        enterMail.textContent = `EMail : ${data.email}`;
        newID.textContent = `ID : ${data.id}`;
        body.append(enterName, enterMail, newID);
    })
    .catch(function (error) {
        let errr = document.createElement('h3');
        errr.textContent = `Hey something went wrong, ${error}`;
        body.append(errr);
    });
    


}