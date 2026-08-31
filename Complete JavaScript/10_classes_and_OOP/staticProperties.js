class User {
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createID(){
        return `123`
    }
}

const ansh = new User("ansh")
//console.log(ansh.createID())


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.createID())