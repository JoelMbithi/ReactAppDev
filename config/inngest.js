import { Inngest } from "inngest";
import connectDB from "./Db";
import User from "@/models/user";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });


//Inngest Function to save user data to a database

export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-user-from-clerk' 
    },
    {
        event: 'clerk/user.created'
    },

    async({event}) => {
        const { id, first_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id:id,
            email: email_addresses[0].email_addresses,
            name: first_name + '' + last_name,
            image_url:image_url
        }

        await connectDB()
        await User.create(userData)
    }
)

//inngest function to update user data in database

export const syncUserUpdation = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    { event: 'clerk/user.update'},
    async({event}) => {
        const { id, first_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id:id,
            email: email_addresses[0].email_addresses,
            name: first_name + '' + last_name,
            image_url:image_url
        }

        await connectDB()
        await User.findByIdAndUpdate(id,userData)
    }
)

