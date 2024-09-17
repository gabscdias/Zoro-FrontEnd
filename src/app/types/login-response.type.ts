import { Establishments } from "./establishments.type"

export type LoginResponse = {
  token: string,
  name: string,
  establishments: Establishments[]
}
