import connection from "../db/connection";
import queries from "../db/queries";
import { v4 as uuidv4 } from 'uuid'

class UsersRepository {
    create (username: string, age: number, hobbies: string) {
        return connection.query(queries.create, [username,age,hobbies,uuidv4()])
    }

    delete (id: string): Promise<void>  {
        return this.getById(id).then(user => {
            connection.query(queries.delete, id)
        })
    }

    getAll (): Promise<any> {
        return connection.query(queries.allUsers).then(value => {
            let users = value[0];
            return users;
        })
    }

    getById (id: string): Promise<User> {
        return connection.query(queries.getById, id).then(value => {
            let user = value[0][0]
            if(!user){
                throw 404
            }
            return user;
        })
    }

    update () {

    }
}

export default UsersRepository;