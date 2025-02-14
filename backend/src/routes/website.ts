import express from "express";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

// Save website configuration
router.post("/save", async (req, res) => {
  const { components } = req.body;
  const website = await prisma.website.create({
    data: { components },
  });
  res.json({ success: true, website });
});

// Load website configuration
router.get("/load/:id", async (req, res) => {
  const { id } = req.params;
  const website = await prisma.website.findUnique({
    where: { id: Number(id) },
  });
  res.json({ success: true, website });
});

module.exports = router;
