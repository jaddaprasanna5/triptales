import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET || "triptales-secret-123";

export function createToken(user: any) {
  return jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    SECRET,
    { expiresIn: "7d" }
  );
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}