import { rest } from 'msw'
import { PORT8000URL } from '../port8000url'

export const handlers = [
    
        rest.get(`${PORT8000URL}api/Gadgets/:id`, (req, res, ctx) => {
    
            const { id } = req.params
            
            return res(
                ctx.status(200),
                ctx.json({ "_id": id, "itemName": "Mobile", "brandName": "Vivo", "units": 5, "price": 13000.0 }),
            )
        }),

    rest.get(`${PORT8000URL}api/Gadgets`, (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            ctx.json(
                [
                    { "_id": 1, "itemName": "Mobile", "brandName": "Vivo", "units": 5, "price": 13000.0 },
                    { "_id": 2, "itemName": "Washing Machine", "brandName": "LG", "units": 3, "price": 15000.0 }
                ]
            )
        )
    }),
]