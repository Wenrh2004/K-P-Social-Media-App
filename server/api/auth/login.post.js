import bcrypt from "bcrypt";
import { getUserByUsername } from "../../db/users";
import { generateTokens, sendRefreshToken } from "../../utils/jwt";
import { userTransformer } from "@/server/transformers/user";
import { createRefreshToken } from "@/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { username,password } = body

    if (!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Ivalid params'
        }))
    }

    // Is the user registered
    const user = await getUserByUsername(username)

    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    // Compare passwords
    const doesThePasswordMatch = await bcrypt.compare(password, user.password)

    if (!doesThePasswordMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    // Gennerate Tokena
    // Access token
    // Refresh token
    const { accessToken, refreshToken } = generateTokens(user)

    // Save it inside db
    await createRefreshToken({
        token: refreshToken,
        userID: user.id
    })
    
    // Add http only cookie
    sendRefreshToken(event, refreshToken)

    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
})