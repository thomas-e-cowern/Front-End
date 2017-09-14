var app = angular.module("Santa", []);

app.controller("AppController", appCtrl);

function appCtrl() {

    var main = this;
    
    main.nameList = [];
    
    var hidden = false

    main.message = "Successfully connected to controller";

    main.addName = function () {

        var newName = document.getElementById("name").value;
        
        console.log("newName: ", newName);
        
        if (!newName) {
            
            document.getElementById("name").placeholder = "Please type a name first!"
            
            return;
            
        }
        
        main.nameList.push(newName);
        
        document.getElementById("name").value = '';
        
        console.log(main.nameList);
    }

}
