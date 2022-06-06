import { connect } from 'mongoose'

const isConn = {
  isConnected: false
}
export async function dbConnect() {
  const db = await connect(process.env.MONGODB_URL)
  if (isConn.isConnected) return

  isConn.isConnected = db.connections[0].readyState
}
