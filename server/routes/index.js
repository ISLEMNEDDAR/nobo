import {Router} from "express"
import {program1, program2} from "../controller";
import * as programValidator from "../validations/programValidator"

const programmeRoute = new Router()

programmeRoute.get("/p1",programValidator.validateProgram("p1"),program1)
programmeRoute.get("/p2",programValidator.validateProgram("p2"),program2)
export default programmeRoute