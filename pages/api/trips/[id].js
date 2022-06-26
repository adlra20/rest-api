import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const trip = await prisma.trip.findUnique({
      where: {
        id: parseInt(req.query.id),
      },
    })
    if (!trip){
      return res.status(404).json({ message: 'Not Found' })
    }
    res.status(200).json(trip)
  }
  if (req.method === 'PUT') {

  }
  if (req.method === 'DELETE') {

  }
}