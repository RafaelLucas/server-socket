import { Router, Request, Response } from "express";

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    menjase: "Mensaje Ok en GET"
  })
})

// Routes
router.post('/mensajes/:id', (req: Request, res: Response) => {

  const user = req.body.user;
  const password = req.body.password;
  const id = req.params.id;

  res.json({
    ok: true,
    user,
    password,
    id,
    menjase: "Mensaje Ok en POST"
  })
})

