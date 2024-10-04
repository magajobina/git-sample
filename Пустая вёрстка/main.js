const user = [
    {
        name: 'Max',
        age: 15,
        isadmin: true,
    },
    {
        name: 'Alex',
        age: 15,
        isadmin: false
    },
    {
        name: 'Alex',
        age: 15,
        isadmin: false
    },
    {
        name: 'Alex',
        age: 15,
        isadmin: false
    },
    {
        name: 'Alex',
        age: 15,
        isadmin: false
    },
    {
        name: 'Alex',
        age: 15,
        isadmin: true
    },
    {
        name: 'Alex',
        age: 15,
        isadmin: true
    },
]
function numberusers(array) {
    let user_N = 0
    for (let i = 0; i < array.length; i++) {
        if (array.isadmin === false) {
            user_N++;
        }
    }
    console.log(user_N)
}
numberusers(user);
