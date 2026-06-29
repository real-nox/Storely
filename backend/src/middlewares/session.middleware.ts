import { config } from "dotenv";
import session from "express-session";
config({ quiet: true });

const key = process.env.PRIVATE_KEY;

if (!key) throw new Error("Session Secret is not defined in the env");

const sessionM = session({
  secret: key,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 24,
    secure: false,
    httpOnly: true,
  },
});

export default sessionM;
