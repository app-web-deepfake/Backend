import { Router } from "express";

const router = Router();

router.post("/process", (req, res) => {
    res.send("Aquí se procesará el archivo con Facia AI");
});

router.get("/:id", (req, res) => {
    res.send("Aquí se devolverá el resultado del análisis");
});

export default router;
