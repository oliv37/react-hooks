const TIMEOUT = 1000;

export const USERS = [
    {id: 1, name: "Paul", age: 24, city: "Toulouse", job: "Dentiste"},
    {id: 2, name: "Sam", age: 55, city: "Nantes", job: "Secrétaire"},
    {id: 3, name: "Harry", age: 61, city: "Bordeaux", job: "Cuisinier"},
];

export function findUserById(userId) {
    let canceled = false;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                if (canceled) {
                    return reject();
                }
                
                resolve({...USERS.find(user => userId === user.id)});
            },
            TIMEOUT
        );
    });

    return {
        promise,
        cancel: () => {canceled = true;}
    };
}