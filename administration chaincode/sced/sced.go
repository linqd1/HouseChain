/*
@Time : 2018/9/8 上午10:43 
@Author : leixianting
@File : sced
@Software: GoLand
*/

package sced

import (
	"encoding/json"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
	"hackthon/SCED-chaincode/account"
)

var LOGGER  = shim.NewLogger("sced")

type asset struct {
	Uid        string `json:"uid"` // 唯一id
	OriginData string `json:"origin_data"` // 原始数据
	PubKey     string  `json:"pub_key"` // 公钥信息
	Open       bool    `json:"open"` //数据是否公开
}

/*
 * 存储数据
 * args[2]: json字符串
 * args[1]: 公钥地址
 * args[0]: uid
 */
func UpdateData(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	if len(args) != 3 {
		return shim.Error("参数个数错误")
	}

	sced := &asset{args[0], args[2], args[3], false}

	scedBytes, err := json.Marshal(sced)
	if err != nil{
		LOGGER.Error("信息存储失败")
		return shim.Error("信息存储失败")
	}

	err = stub.PutState(args[0], scedBytes)

	if err != nil {
		LOGGER.Error("信息存储失败")
		return shim.Error("信息存储失败")
	}

	return shim.Success([]byte("数据上传成功"))
}

/*
 * 获取数据
 * args[0]: uid
 */
func GetData(stub shim.ChaincodeStubInterface, args []string) pb.Response{
	if len(args) != 1 {
		LOGGER.Error("参数错误")
		return shim.Error("参数错误")
	}

	scedBytes, err := stub.GetState(args[0])
	if err != nil {
		LOGGER.Error("数据获取失败")
		return shim.Error("数据获取失败")
	}

	sced := &asset{}
	err = json.Unmarshal(scedBytes, sced)
	if err != nil {
		LOGGER.Error("反序列化失败")
		return shim.Error("反序列化失败")
	}

	if !sced.Open {
		return shim.Error("该数据未公开")
	}

	return shim.Success([]byte(sced.OriginData))
}

/**
 * 数据开放
 * args[0]:uid
 */
func OpenData(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	if len(args) != 1 {
		LOGGER.Error("参数错误")
		return shim.Error("参数错误")
	}

	requester, err := account.GetCreator(stub)
	if err != nil {
		LOGGER.Error("获取操作用户失败")
		return shim.Error("获取操作用户失败")
	}

	uid := args[0]

	scedBytes, err := stub.GetState(uid)
	if err != nil {
		LOGGER.Error("数据获取失败")
		return shim.Error("数据获取失败")
	}

	sced := &asset{}
	err = json.Unmarshal(scedBytes, sced)
	if err != nil {
		LOGGER.Error("反序列化失败")
		return shim.Error("反序列化失败")
	}

	if sced.PubKey != requester {
		LOGGER.Error("没有权限做该操作")
		return shim.Error("没有权限做该操作")
	}

	sced.Open = true

	scedBytes, err = json.Marshal(sced)
	if err != nil {
		LOGGER.Error("系列化失败")
		return shim.Error("序列化失败")
	}

	err = stub.PutState(uid, scedBytes)
	if err != nil {
		LOGGER.Error("存储失败")
		return shim.Error("存储失败")
	}

	return shim.Success(nil)
}

