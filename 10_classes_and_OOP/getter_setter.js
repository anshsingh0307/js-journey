class User {
    constructor(email, password){
    this.email = email
    this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){                               // setter me return nahi krte
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value 
    }
}

const ansh = new User("ansh@gmail.com", "abc")
console.log(ansh.password)
console.log(ansh.email)