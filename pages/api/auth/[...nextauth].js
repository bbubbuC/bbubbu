import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { verifyPassword } from "../../../lib/auth";

let prisma = new PrismaClient();

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "유저 이메일,페스워드 방식",
            credentials: {
                email: { label: "유저 이메일", type: "email", placeholder: "user@email.com" },
                password: { label: "패스워드", type: "password" },
            },
            //로그인을 담당하고 있는ㅂ부분
            async authorize(credentials) {
                const user = await prisma.users.findUnique({
                    where: {
                        email: String(credentials.email),
                    },
                    select: {
                        name: true, email: true, password: true
                    },
                });

                if (!user) {
                    throw new Error('유저를 찾을 수 없다.!');
                }

                const isValid = await verifyPassword(
                    credentials.password,
                    user.password
                );

                if (!isValid) {
                    throw new Error('비밀번호, 아이디 틀림!');
                }
                return { name: user.name, email: user.email};
            }
        })
    ]
})