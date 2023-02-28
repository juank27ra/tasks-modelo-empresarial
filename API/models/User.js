const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')
// const {schema} = mongoose

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true, // elimina espacios al principio y final
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Is required']
    }
})

schema.pre('save', function(next){
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            return next(err)
        }
        this.password = hash
        next()
    })
})

schema.statics.authenticate = async (email, password) => {
    const user = await mongoose.model('User').findOne({email: email})
    if(user) {
        return new Promise((resolve, reject ) => {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) reject(err);
                resolve(result === true ? user : null)
            })
        })
    }
    return null
}


module.exports = mongoose.model('user', schema)