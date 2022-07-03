import { Router } from "express";
import { create, get, list, read, remove, update } from "../controllers/category";
import { checkAuth } from "../middleware/checkAuth";
const routercate = Router();
routercate.get("/categorys", checkAuth, list);
routercate.get("/category/:id", get);
routercate.post("/categorys", create);
routercate.get('/categorys/:slug', checkAuth, read)
routercate.delete("/categorys/:id", remove);
routercate.put("/categorys/:id", update)
export default routercate;