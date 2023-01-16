class CreateUser {
    username: string;
    age: number;
    hobbies: string;

    constructor(name,age,hobbies) {
        if(!(name && age && hobbies)){
            throw 400
        }
        this.username = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

export default CreateUser;