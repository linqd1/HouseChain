/*
@Time : 2018/9/8 上午10:44
@Author : leixianting
@File : account
@Software: GoLand
*/

package account

import (
	"github.com/hyperledger/fabric/core/chaincode/shim"
)

var LOGGER = shim.NewLogger("sced")

//type user struct {
//	UID string `json:"uid"`
//	Name string `json:"name"`
//	PubKey string `json:"pub_key"`
//}

//// 添加用户 -- demo阶段会初始化一些认证vc进来
//func AddVC(stub shim.ChaincodeStubInterface, args []string) pb.Response {
//	if len(args) != 3 {
//		LOGGER.Error("参数错误")
//		return shim.Error("参数错误")
//	}
//
//	account := &user{args[0], args[1], args[2]}
//
//	accountBytes, err := json.Marshal(account)
//	if err != nil {
//		LOGGER.Error("账户信息序列化失败")
//		return shim.Error("账户信息序列化失败")
//	}
//
//	err = stub.PutState(args[0], accountBytes)
//	if err != nil {
//		LOGGER.Error("添加账户失败")
//		return shim.Error("添加账户失败")
//	}
//
//	return shim.Success( []byte("账户" + args[0] + "添加成功"))
//}

//// 检查是否是认证投行
//func CheckVC(stub shim.ChaincodeStubInterface, args []string) pb.Response {
//	crater, err := getCreator(stub)
//}

//func GetCreator(stub shim.ChaincodeStubInterface) (string, error) {
//
//	creatorByte, err := stub.GetCreator()
//	if err != nil {
//		return "", err
//	}
//	certStart := bytes.IndexAny(creatorByte, "-----BEGIN")
//	if certStart == -1 {
//		return "", fmt.Errorf("证书获取失败")
//	}
//
//	certText := creatorByte[certStart:]
//
//	return string(certText), nil
//}