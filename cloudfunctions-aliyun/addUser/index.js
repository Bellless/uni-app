// 声明严格模式
// 严格模式下  全局变量会被多次使用,一般全局变量应为静态的对象等
'use strict';
// let a=6;
// 操作数据库
// 声明db对象
const db=uniCloud.database();
// 声明访问集合（表）
const userDb=db.collection("user");
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// console.log('event : ', event)
	// a++
	// 将客户度输入的内容存入表中
	// 因为云数据的操作是异步的 所有需要使用await关键字声明异步
	let addUsers=await userDb.add(event)
	//返回数据给客户端
	// addUsersaddUsers为回调参数
	return addUsers
};
