interface NextApiRequest {
  session?: JsonWebKey | null
  userId: number
  method: string
  isAdmin: boolean
}
