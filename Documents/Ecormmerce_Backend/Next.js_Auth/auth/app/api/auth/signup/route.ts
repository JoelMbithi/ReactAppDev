import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import User from '@/models/users';
import connectToDatabase from '@/lib/mongodb';

export async function POST(request: Request) {
    try {
        const { name, email, password, confirmPassword } = await request.json();

        // Correct Email Regex
        const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!name || !email || !password || !confirmPassword) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ message: "Invalid Email" }, { status: 400 });
        }

        if (password !== confirmPassword) {
            return NextResponse.json({ message: "Passwords don't match" }, { status: 400 });
        }

        if (password.length < 6) {
            return NextResponse.json({ message: "Password too short" }, { status: 400 });
        }

        await connectToDatabase();
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            name,
            password: hashedPassword, // Fixed password field
        });

        await newUser.save();
        return NextResponse.json({ message: "User Created Successfully" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
