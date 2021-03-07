const constraints = {
    firstname: {
        presence: {
            allowEmpty: false,
            message: "is not empty"
        }
    },
    lastname: {
        presence: {
            allowEmpty: false,
            message: "is not empty"
        }
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 100
        }
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    }
}

const app = {
    data() {
        return {
            FirstName: null,
            LastName: null,
            Age: null,
            Email: null,
            PhoneNumber: null,
            profileImage: 'images/profile.jpg',
            errors: null
        }
    },
    methods: {
        checkForm(e){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone},
                                    constraints)
            if(this.errors){
                e.preventDefault();
            }else{
                alert("Success!")
            }
        }
    }
}
let mountApp = Vue.createApp(app).mount('#app')