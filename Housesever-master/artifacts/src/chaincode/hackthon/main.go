/*
@Time : 2018/9/8 下午1:52
@Author : leixianting
@File : main
@Software: GoLand
*/
package main

import (
	"chaincode/hackthon/sced"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"

)

type scedSmartCode struct {
}

var LOGGER  = shim.NewLogger("main")

var wcFunctions = map[string]func(shim.ChaincodeStubInterface, []string) pb.Response {
	"updateData" : sced.UpdateData,
	"getData"    : sced.GetData,
	"openData"   : sced.OpenData,
}

//========================================================================
// 实例化chaincode时自动调用
//========================================================================
func (s *scedSmartCode) Init(stub shim.ChaincodeStubInterface) pb.Response {
	return shim.Success(nil)
}

//========================================================================
// chaincode调用
//========================================================================
func (s *scedSmartCode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
	function, args := stub.GetFunctionAndParameters()
	bcFunc := wcFunctions[function]
	if bcFunc == nil {
		LOGGER.Error("非法调用函数")
		return shim.Error("非法调用函数")
	}
	return bcFunc(stub, args)
}

func main()  {
	err := shim.Start(new(scedSmartCode))
	if err != nil {
		LOGGER.Error("创建新合约失败: ", err)
	}
}


