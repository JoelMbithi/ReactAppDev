import mongoose, { Document, Model, Schema} from "mongoose"
import { unique } from "next/dist/build/utils";

interface IUser extends Document {
    name:String;
    email:String;
    password?:String;
    id:string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
        },
        email:{
            type: String,
            require: true,
            unique: true
        },

        password:{
            type: String,
            require: false,
        }
    }
)

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)

export default User;