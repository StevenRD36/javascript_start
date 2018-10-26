
window.onload = function () {
    var users = [user1,user2,user3,user4,user5];
    //gebruik verschillende functions om deze opdrachten te laten slagen

    //1.loop door de lijst en print de naam af in console
    print(users);
    //2.bereken het gemiddelde van "programmeren 2"
    console.log(calculateAver(users));
    //3.sorteer de lijst op volgorde van het cijfer voor programmeren 1
    //tip users.sort()
    console.log(sortProgrammeren1(users));
    //4.print de lijst uit op de webpagina
    //gebruik een <table>
    createTable(users);
}

function print(users){
    //do something
    for(var i = 0 ; i < users.length ; i++){
        console.log(users[i].getFullName());
    }
}

function calculateAver(users){
    var sum = 0;
    //loop 
    for(var i = 0; i<users.length;i++){
        sum += users[i].punten[1].cijfer;
    }
    return sum / users.length; 
}

function sortProgrammeren1(users){
    users.sort(function(a,b){
        return a.punten[0].cijfer - b.punten[0].cijfer;
    });
    return users;
}

function createTable(users){
    var table = "<table>";
    for(var i = 0;i < users.length ; i++){
        table += "<tr><td>"+users[i].getFullName()+"</td><td>"+users[i].punten[0].vak+"</td><td>"+users[i].punten[0].cijfer+"</td><td>"+users[i].punten[1].vak+"</td><td>"+users[i].punten[1].cijfer+"</td></tr>";
    }
    table += "</table>";
    document.writeln(table)
}

var user1 = {
    firstname: "Steven",
    lastname: "De Cock",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },

    punten : [
        {vak : "programmeren 1", cijfer : 15},
        {vak : "programmeren 2", cijfer : 20}
    ]
}

var user2 = {
    firstname: "Jimmy",
    lastname: "Hendrix",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    punten : [
        {vak : "programmeren 1", cijfer : 11},
        {vak : "programmeren 2", cijfer : 2}
    ]
}

var user3 = {
    firstname: "Toon",
    lastname: "Aerts",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    punten : [
        {vak : "programmeren 1", cijfer : 18},
        {vak : "programmeren 2", cijfer : 16}
    ]
}

var user4 = {
    firstname: "Wout",
    lastname: "Van Aert",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    punten : [
        {vak : "programmeren 1", cijfer : 3},
        {vak : "programmeren 2", cijfer : 15}
    ]
}

var user5 = {
    firstname: "Marijn",
    lastname: "De Valck",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    punten : [
        {vak : "programmeren 1", cijfer : 3},
        {vak : "programmeren 2", cijfer : 11}
    ]
}
