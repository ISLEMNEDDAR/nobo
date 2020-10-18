import {Router} from "express"
import {program1} from "../controller";
import * as programValidator from "../validations/programValidator"

const programmeRoute = new Router()

programmeRoute.get("/p1",programValidator.validateProgram("p1"),program1)

export default programmeRoute