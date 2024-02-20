const user = {
    username: "Ajaya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
user.username = "Aju"
user.welcomeMessage()

console.log(this);

chai()

const chai = function () {
    let username = "Ajaya"
    console.log(this.username);
}