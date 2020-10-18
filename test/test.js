import * as respositoryProgram from "../server/repository/repository"
import { expect } from 'chai';
describe("excercice",()=>{
    describe("program1",()=>{
        it("should return 2", ()=>{
            expect(respositoryProgram.programme1("testtestte",5),2)
        });
        it('should error on 0 number', function () {
            expect(()=> respositoryProgram.programme1("fsdfdsfsdf",0).to.throw())
        });
        it('should error on no nput', function () {
            expect(()=> respositoryProgram.programme1().to.throw())
        });
        it('should error on string not String', function () {
            expect(()=> respositoryProgram.programme1(123,123).to.throw())
        });
        it('should error on number not number', function () {
            expect(()=> respositoryProgram.programme1("sfsdffsdf",123).to.throw())
        });
        it('should error on number upper than 20', function () {
            expect(()=> respositoryProgram.programme1("fsdfsdfsdf",21).to.throw())
        });
    })
    describe("program2",()=>{

    })
})