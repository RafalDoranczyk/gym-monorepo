import {GoogleSigninPayload} from '@repo/gym-shared-api-schemas/auth'
import { log } from "@repo/logger";


const a: GoogleSigninPayload = {
  idToken: '35'
}

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store() {
  log("Hey! This is the Store page.");

return <h1>page</h1>
}
