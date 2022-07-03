import { Router } from 'express';
import { userById } from '../controllers/user';
import { create, get, list, remove, update } from '../controllers/products';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middleware/checkAuth';
const router = Router();
router.get("/products", checkAuth, list);
router.get("/products/:id", get)
    // router.post("/products/:userId", requireSignin, isAuth, isAdmin, create);
router.post("/products", create);
router.delete("/products/:id", remove)
router.put("/products/:id", update)
router.param("userId", userById);
export default router;