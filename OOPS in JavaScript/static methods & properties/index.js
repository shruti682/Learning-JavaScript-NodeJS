// static
// used to create or clone object - used when we don't need to create different instances of a property
// can be called without using a instance of class

class User{
    // STATIC PROPERTY
    // useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances
    static id=1;
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.id=User.id++;
    }


    // STATIC FUNCTION
    // used in utility function
    // provides memory efficiency, global access, object independence, performance, and code organization
    static compareByAge(user1,user2){
        return user1.age-user2.age;
        // this.id --> static methods can access static properties by this keyword but a normal function can not
    }



    static{
        // static block
        // runs when a static method is called
        // only run once for one static function
        // used for initial configuration
        console.log('Initialized');
    }
}

const user1=new User("Shruti",40);
const user2=new User("Sonal",20);
const user3=new User("Patanjali",30);
const user4=new User("Harsh",1);

const users=[user1,user2,user3,user4];

// users.sort(User.compareByAge);
console.log(users);

// ex- Math.random() --> random is  a utility function
