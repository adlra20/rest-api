import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const expense = await prisma.expense.findUnique({
      where: {
        id: parseInt(req.query.id),
      },
    })
    if (!expense){
      return res.status(404).json({ message: 'Not Found' })
    }
    res.status(200).json(expense)
  }
  if (req.method === 'PUT') {
    const { trip, name, date, amount, currency } = req.body

    await prisma.expense.update({
      data: {
        trip,
        name,
        date,
        amount,
        currency,
      },
      where: {
        id: parseInt(req.query.id),
      },
    })

    return res.status(200).end()
  }
  if (req.method === 'DELETE') {

  }
}