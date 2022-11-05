const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../app');
describe('login', () => {
describe('/GET login', () => {
    it('it should GET login page', (done)=>{
        chai.request(server)
        .post('/login')
        .send({
            email:"useremail11@gmail.com",
            password:"useremail11@gmail.com"
        })
        .expect(200)
        .expect((res)=>{
            expect(res.headers['x-auth']).not.toBeNull();

        })
        .end((err,res) => {
            if(err) return done(err);
        })
    });
});   
console.log("Test Passed");
});
