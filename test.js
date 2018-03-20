'use strict'
let should = require('should');
let convertor = require('./index');
describe('convertor test', ()=>{
	it('should call successfully', () => {
		should.equal( convertor.toBig('我爱北京天安门'), '我愛北京天安門');
		should.equal( convertor.toSimple('我愛北京天安門'), '我爱北京天安门');
	});
});
