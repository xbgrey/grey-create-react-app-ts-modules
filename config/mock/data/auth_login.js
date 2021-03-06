module.exports = {
	"body":{
		"departmentIds":[
			"1db95c95-ec83-4243-9bf1-ec3cfa560d9a"
		],
		"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5aWxpYW5nIiwiY29tcGFueUlkIjoiMTc0NDk1MDAtNDNiYi00YzRlLWEzYjYtNjNjNTFiNWQ3OTQ4IiwiZGVwYXJ0bWVudElkcyI6WyIxZGI5NWM5NS1lYzgzLTQyNDMtOWJmMS1lYzNjZmE1NjBkOWEiXSwiaWF0IjoxNTIzMjgzNDkyODc5LCJ1c2VySWQiOiI2ZTFmNzlhYy1hOTU3LTQwZWEtOWQ1NS1jZTA1NmI1ZDQ4NmUiLCJqdGkiOiIwNWI2N2Q5Yy1kMmFlLTQ4MmEtOTRjNy03MjVmY2RiZGUzN2QifQ._Vm2hx40cpMmYOyp2wmq9-X1PopjfzrRAbsXPDeVfrY",
		"user":{
			"activated":true,
			"companyId":"17449500-43bb-4c4e-a3b6-63c51b5d7948",
			"createTime":1517908583000,
			"email":"",
			"lastLoginIP":"27.10.43.232",
			"lastLoginTime":1523283492859,
			"loginName":"yiliang",
			"nickName":"yiliang",
			"phone":"",
			"updateTime":1523282613000,
			"userId":"6e1f79ac-a957-40ea-9d55-ce056b5d486e",
			"userType":"COMMON_USER"
		},
		"userRules":[
			{
				"hasPermission":false,
				"rule":{
					"description":"公司管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"公司管理",
					"pruleId":1,
					"resource":"company",
					"ruleId":2,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取公司列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取公司列表",
					"pruleId":2,
					"resource":"GET /company",
					"ruleId":21,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"创建公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"创建公司",
					"pruleId":2,
					"resource":"POST /company",
					"ruleId":22,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取公司信息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取公司信息",
					"pruleId":2,
					"resource":"GET /company/{id}",
					"ruleId":23,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取公司角色",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取公司角色",
					"pruleId":2,
					"resource":"GET /company/{id}/role",
					"ruleId":24,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"新增公司角色",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"新增公司角色",
					"pruleId":2,
					"resource":"POST /company/{id}/role",
					"ruleId":25,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取公司用户列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取公司用户列表",
					"pruleId":2,
					"resource":"GET /company/{id}/user",
					"ruleId":26,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"修改公司用户角色",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"修改公司用户角色",
					"pruleId":2,
					"resource":"PUT /company/{id}/user/{id}/role",
					"ruleId":27,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"修改公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"修改公司",
					"pruleId":2,
					"resource":"PUT /company",
					"ruleId":56,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"查询公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"查询公司",
					"pruleId":2,
					"resource":"GET /company/query",
					"ruleId":57,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"查询公司下的用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"查询公司下的用户",
					"pruleId":2,
					"resource":"GET /company/user/query",
					"ruleId":58,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"删除或恢复公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"删除或恢复公司",
					"pruleId":2,
					"resource":"PUT /company/{id}/delete",
					"ruleId":59,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"激活或禁用公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"激活或禁用公司",
					"pruleId":2,
					"resource":"PUT /company/{id}/disable",
					"ruleId":60,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"删除公司下的角色",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"删除公司下的角色",
					"pruleId":2,
					"resource":"DELETE /company/{id}/role",
					"ruleId":61,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"修改公司下的角色",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"修改公司下的角色",
					"pruleId":2,
					"resource":"PUT /company/{id}/role",
					"ruleId":62,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取子公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取子公司",
					"pruleId":2,
					"resource":"GET /company/{id}/subsidiary",
					"ruleId":63,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"创建子公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"创建子公司",
					"pruleId":2,
					"resource":"POST /company/{id}/subsidiary",
					"ruleId":64,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"修改公司下的用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"修改公司下的用户",
					"pruleId":2,
					"resource":"PUT /company/{id}/user",
					"ruleId":65,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"删除或恢复公司下的用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"删除或恢复公司下的用户",
					"pruleId":2,
					"resource":"PUT /company/{id}/user/{id}/delete",
					"ruleId":66,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"激活或禁用公司下的用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"激活或禁用公司下的用户",
					"pruleId":2,
					"resource":"PUT /company/{id}/user/{id}/disable",
					"ruleId":67,
					"type":1
				}
			},
			{
				"hasPermission":true,
				"rule":{
					"description":"修改公司下的用户密码",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"修改公司下的用户密码",
					"pruleId":2,
					"resource":"PUT /company/{id}/user/{id}/password",
					"ruleId":68,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"重置公司下的用户密码",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"重置公司下的用户密码",
					"pruleId":2,
					"resource":"PUT /company/{id}/user/{id}/reset",
					"ruleId":69,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"公司关联--公司关联列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"公司关联列表",
					"pruleId":2,
					"resource":"POST /company/connection/list",
					"ruleId":28,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"公司关联--启用关联公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"启用关联公司",
					"pruleId":2,
					"resource":"POST /company/connection/enable",
					"ruleId":29,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"公司关联--禁用关联公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"禁用关联公司",
					"pruleId":2,
					"resource":"POST /company/connection/disable",
					"ruleId":30,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"公司管理-企业信息查询",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"公司管理-企业信息查询",
					"pruleId":2,
					"resource":"GET /comp/info",
					"ruleId":137,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"部门管理--获取公司部门列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"部门管理--获取公司部门列表",
					"pruleId":2,
					"resource":"GET /company/{id}/department",
					"ruleId":251,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"部门管理--新增部门",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"部门管理--新增部门",
					"pruleId":2,
					"resource":"POST /company/{id}/department",
					"ruleId":252,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"部门管理--获取指定部门",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"部门管理--获取指定部门",
					"pruleId":2,
					"resource":"GET /company/{id}/department/{id}",
					"ruleId":253,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"部门管理--修改指定部门",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"部门管理--修改指定部门",
					"pruleId":2,
					"resource":"POST /company/{id}/department/{id}",
					"ruleId":254,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"部门管理--修改指定部门父部门",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"部门管理--修改指定部门父部门",
					"pruleId":2,
					"resource":"PUT /company/{id}/department/{id}/parent",
					"ruleId":255,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"部门管理--获取指定部门的用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"部门管理--获取指定部门的用户",
					"pruleId":2,
					"resource":"GET /company/{id}/department/{id}/user",
					"ruleId":257,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"部门管理--新增指定部门的用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"部门管理--新增指定部门的用户",
					"pruleId":2,
					"resource":"POST /company/{id}/department/{id}/user",
					"ruleId":258,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"部门管理--删除指定部门的用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"部门管理--删除指定部门的用户",
					"pruleId":2,
					"resource":"DELETE /company/{id}/department/{id}/user",
					"ruleId":259,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"公司管理-导出公司关联关系",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"公司管理-导出公司关联关系",
					"pruleId":2,
					"resource":"GET /company/connection/export",
					"ruleId":142,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"角色管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"角色管理",
					"pruleId":1,
					"resource":"role",
					"ruleId":3,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取角色",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取角色",
					"pruleId":3,
					"resource":"GET /role",
					"ruleId":31,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"权限管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"权限管理",
					"pruleId":1,
					"resource":"rule",
					"ruleId":4,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取权限",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取权限",
					"pruleId":4,
					"resource":"GET /rule",
					"ruleId":41,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--获取数据权限组列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--获取数据权限组列表",
					"pruleId":4,
					"resource":"GET /company/{id}/dataRule/dataRuleGroup",
					"ruleId":201,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--获取指定数据权限组",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--获取指定数据权限组",
					"pruleId":4,
					"resource":"GET /company/{id}/dataRule/dataRuleGroup/{id}",
					"ruleId":202,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--新增数据权限组",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--新增数据权限组",
					"pruleId":4,
					"resource":"POST /company/{id}/dataRule/dataRuleGroup",
					"ruleId":203,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--修改数据权限组组织列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--修改数据权限组组织列表",
					"pruleId":4,
					"resource":"POST /company/{id}/dataRule/dataRuleGroup/{id}/org",
					"ruleId":204,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--获取数据权限组组织列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--获取数据权限组组织列表",
					"pruleId":4,
					"resource":"GET /company/{id}/dataRule/dataRuleGroup/{id}/org",
					"ruleId":205,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--修改数据权限组绑定的用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--修改数据权限组绑定的用户",
					"pruleId":4,
					"resource":"PUT /company/{id}/dataRule/dataRuleGroup/{id}/user",
					"ruleId":206,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--获取数据权限组绑定的用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--获取数据权限组绑定的用户",
					"pruleId":4,
					"resource":"GET /company/{id}/dataRule/dataRuleGroup/{id}/user",
					"ruleId":207,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--修改用户的数据权限组",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--修改用户的数据权限组",
					"pruleId":4,
					"resource":"POST /company/{id}/user/{id}/dataRule/dataRuleGroup",
					"ruleId":208,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--查询用户的数据权限组",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--查询用户的数据权限组",
					"pruleId":4,
					"resource":"GET /company/{id}/user/{id}/dataRule/dataRuleGroup",
					"ruleId":209,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--获取公司的数据类型",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--获取公司的数据类型",
					"pruleId":4,
					"resource":"GET /company/{id}/dataRule/dataType",
					"ruleId":221,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"数据权限--修改公司的数据类型",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"数据权限--修改公司的数据类型",
					"pruleId":4,
					"resource":"POST /company/{id}/dataRule/dataType",
					"ruleId":222,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"根权限",
					"icon":"iconfont icon-other",
					"level":0,
					"name":"根权限",
					"pruleId":0,
					"resource":"root",
					"ruleId":1,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"用户管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"用户管理",
					"pruleId":1,
					"resource":"user",
					"ruleId":5,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"创建用户",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"创建用户",
					"pruleId":5,
					"resource":"POST /user",
					"ruleId":51,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"用户密码验证",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"用户密码验证",
					"pruleId":5,
					"resource":"POST /user/password/check",
					"ruleId":52,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取用户信息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取用户信息",
					"pruleId":5,
					"resource":"GET /user/{id}",
					"ruleId":53,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取用户角色",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取用户角色",
					"pruleId":5,
					"resource":"GET /user/{id}/role",
					"ruleId":54,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取用户权限",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取用户权限",
					"pruleId":5,
					"resource":"GET /user/{id}/rule",
					"ruleId":55,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"集团管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"集团管理",
					"pruleId":1,
					"resource":"user",
					"ruleId":6,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取所有集团",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取所有集团",
					"pruleId":6,
					"resource":"GET /org",
					"ruleId":70,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"更新集团信息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"更新集团信息",
					"pruleId":6,
					"resource":"PUT /org",
					"ruleId":71,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取某个集团",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取某个集团",
					"pruleId":6,
					"resource":"GET /org/{id}",
					"ruleId":72,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"发票管理",
					"pruleId":1,
					"resource":"invoice",
					"ruleId":8,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票底账库管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"发票底账库管理",
					"pruleId":1,
					"resource":"invoice-lib",
					"ruleId":11,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票底账管理--查询底账数据",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票底账管理--查询底账数据",
					"pruleId":11,
					"resource":"POST /invoice-lib-center/queryInvoiceLibByCondition",
					"ruleId":1101,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"通知单管理",
					"pruleId":1,
					"resource":"notice",
					"ruleId":10,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"统计报表",
					"pruleId":1,
					"resource":"statistical",
					"ruleId":9,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"板块管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"板块管理",
					"pruleId":1,
					"resource":"user",
					"ruleId":7,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"板块管理-获取板块",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"板块管理-获取板块",
					"pruleId":7,
					"resource":"GET /module",
					"ruleId":100,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"板块管理-添加板块",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"板块管理-添加板块",
					"pruleId":7,
					"resource":"POST /module",
					"ruleId":101,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"板块管理-更新板块",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"板块管理-更新板块",
					"pruleId":7,
					"resource":"PUT /module",
					"ruleId":102,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"板块管理-查询板块",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"板块管理-查询板块",
					"pruleId":7,
					"resource":"GET /module/{id}",
					"ruleId":103,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"板块管理-删除板块",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"板块管理-删除板块",
					"pruleId":7,
					"resource":"PUT /module/{id}",
					"ruleId":104,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"板块管理-获取板块下的公司",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"板块管理-获取板块下的公司",
					"pruleId":7,
					"resource":"GET /module/{id}/companies",
					"ruleId":105,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"板块管理-绑定公司到板块",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"板块管理-绑定公司到板块",
					"pruleId":7,
					"resource":"PUT /module/{id}/companies",
					"ruleId":106,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取用户权限组",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取用户权限组",
					"pruleId":5,
					"resource":"GET /user/{id}/ruleGroup",
					"ruleId":5115,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"用户管理--获取公司关联列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取公司关联列表",
					"pruleId":5,
					"resource":"POST /company/connection/{id}/list",
					"ruleId":5116,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"公司管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"公司管理",
					"pruleId":2,
					"resource":"company",
					"ruleId":299,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"角色管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"角色管理",
					"pruleId":3,
					"resource":"role",
					"ruleId":399,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"权限管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"权限管理",
					"pruleId":4,
					"resource":"rule",
					"ruleId":499,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"用户管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"用户管理",
					"pruleId":5,
					"resource":"user",
					"ruleId":599,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"集团管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"集团管理",
					"pruleId":6,
					"resource":"user",
					"ruleId":699,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理",
					"pruleId":8,
					"resource":"invoice",
					"ruleId":899,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取发票列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取发票列表",
					"pruleId":8,
					"resource":"GET /invoice",
					"ruleId":801,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"录入发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"录入发票",
					"pruleId":8,
					"resource":"POST /invoice",
					"ruleId":802,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取发票概要",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取发票概要",
					"pruleId":8,
					"resource":"GET /invoice/{id}",
					"ruleId":803,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"获取发票详情",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"获取发票详情",
					"pruleId":8,
					"resource":"GET /invoice/{id}/detail",
					"ruleId":804,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票重新验真",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票重新验真",
					"pruleId":8,
					"resource":"POST /invoice/{id}/realCheck",
					"ruleId":805,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"修改发票业务状态",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"修改发票业务状态",
					"pruleId":8,
					"resource":"POST /invoice/{id}/state",
					"ruleId":806,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-获取发票影像地址",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-获取发票影像地址",
					"pruleId":8,
					"resource":"GET /invoice/${id}/image",
					"ruleId":809,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-批量获取录入发票信息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-批量获取录入发票信息",
					"pruleId":8,
					"resource":"POST /invoice/list",
					"ruleId":810,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-获取未匹配发票列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-获取未匹配发票列表",
					"pruleId":8,
					"resource":"GET /invoice/getUnmatchedInvoice",
					"ruleId":811,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-删除录入发票销项",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-删除录入发票销项",
					"pruleId":8,
					"resource":"DELETE /invoice/invoiceoutput",
					"ruleId":812,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-新增录入发票销项",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-新增录入发票销项",
					"pruleId":8,
					"resource":"POST /invoice/invoiceoutput",
					"ruleId":813,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-修改录入发票销项",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-修改录入发票销项",
					"pruleId":8,
					"resource":"PUT /invoice/invoiceoutput",
					"ruleId":814,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-下载批量录入模版",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-下载批量录入模版",
					"pruleId":8,
					"resource":"GET /invoice/addInvoice/downloadTemplate",
					"ruleId":815,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-批量录入发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-批量录入发票",
					"pruleId":8,
					"resource":"POST /invoice/addInvoice/updateFile",
					"ruleId":816,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-获取影像录入toekn",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-获取影像录入toekn",
					"pruleId":8,
					"resource":"GET /invoice/image/logToken",
					"ruleId":817,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-获取影像关联的toekn",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-获取影像关联的toekn",
					"pruleId":8,
					"resource":"GET /invoice/image/relationToken",
					"ruleId":818,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票录入-下载模板",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票录入-下载模板",
					"pruleId":8,
					"resource":"GET /invoice/income/logging/downloadTemplate",
					"ruleId":819,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票录入-上传录入文件",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票录入-上传录入文件",
					"pruleId":8,
					"resource":"POST /invoice/income/logging/updateFile",
					"ruleId":820,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-查询发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-查询发票",
					"pruleId":8,
					"resource":"GET /invoice/income/biz/query",
					"ruleId":821,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-修改财务状态",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-修改财务状态",
					"pruleId":8,
					"resource":"POST /invoice/income/biz/state/finance",
					"ruleId":822,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-查询影像信息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-查询影像信息",
					"pruleId":8,
					"resource":"POST /invoice/income/image/query",
					"ruleId":823,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-查询发票详情",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-查询发票详情",
					"pruleId":8,
					"resource":"POST /invoice/income/detail/querySingleDetail",
					"ruleId":824,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-获取上传token",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-获取上传token",
					"pruleId":8,
					"resource":"GET /invoice/income/image/logToken",
					"ruleId":825,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-获取关联token",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-获取关联token",
					"pruleId":8,
					"resource":"GET /invoice/income/image/relationToken",
					"ruleId":826,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票录入-录入发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票录入-录入发票",
					"pruleId":8,
					"resource":"POST /invoice/income/logging/add",
					"ruleId":827,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票录入-查询录入",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票录入-查询录入",
					"pruleId":8,
					"resource":"GET /invoice/income/logging/query",
					"ruleId":828,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-重新验真",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-重新验真",
					"pruleId":8,
					"resource":"POST /invoice/income/realcheck/again",
					"ruleId":829,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-查询验真记录",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-查询验真记录",
					"pruleId":8,
					"resource":"GET /invoice/income/realcheck/query",
					"ruleId":830,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-根据条件查询发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-根据条件查询发票",
					"pruleId":8,
					"resource":"POST /invoice/income/biz/queryByCondition",
					"ruleId":831,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-bizId批量查询发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-bizId批量 查询发票",
					"pruleId":8,
					"resource":"POST /invoice/income/biz/queryByIds",
					"ruleId":832,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-根据发票ID查询发票销项",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-根据发票ID查询发票销项",
					"pruleId":8,
					"resource":"POST /invoice/invoiceoutputs",
					"ruleId":833,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票底账库管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票底账库管理",
					"pruleId":11,
					"resource":"invoice-lib",
					"ruleId":1199,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理",
					"pruleId":10,
					"resource":"notice",
					"ruleId":1099,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-关联进项发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"关联进项发票",
					"pruleId":10,
					"resource":"POST /match/income/{id}/add",
					"ruleId":1001,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-获取进项发票关联列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"已关联进项发票",
					"pruleId":10,
					"resource":"POST /match/income/{id}",
					"ruleId":1002,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-进项通知单列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-进项通知单列表",
					"pruleId":10,
					"resource":"POST /notice/income",
					"ruleId":1003,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-进项通知单详情",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-进项通知单详情",
					"pruleId":10,
					"resource":"GET /notice/income/{id}",
					"ruleId":1004,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-进项通知单批量完成",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-进项通知单批量匹配完成",
					"pruleId":10,
					"resource":"POST /notice/income/batchFinish",
					"ruleId":1005,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-进项通知单批量发送",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-进项通知单批量发送",
					"pruleId":10,
					"resource":"POST /notice/income/batchSend",
					"ruleId":1006,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-进项通知单批量作废",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-进项通知单批量作废",
					"pruleId":10,
					"resource":"POST /notice/income/batchInvalid",
					"ruleId":1007,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-销项通知单列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-销项通知单列表",
					"pruleId":10,
					"resource":"POST /notice/output",
					"ruleId":1008,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-销项通知单列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-销项通知单详情",
					"pruleId":10,
					"resource":"GET /notice/output/{id}",
					"ruleId":1009,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-销项通知单列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-销项通知单批量接受",
					"pruleId":10,
					"resource":"POST /notice/output/batchAccept",
					"ruleId":1010,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-销项通知单列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-销项通知单批量拒绝",
					"pruleId":10,
					"resource":"POST /notice/output/batchRefuse",
					"ruleId":1011,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-销项通知单列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-销项通知单批量开票",
					"pruleId":10,
					"resource":"POST /notice/output/batchMakeInvoice",
					"ruleId":1012,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-销项通知单列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-销项通知单批量取消开票",
					"pruleId":10,
					"resource":"POST /notice/output/batchCancelInvoice",
					"ruleId":1013,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-进项发票匹配",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-进项通知单保存匹配状态",
					"pruleId":10,
					"resource":"POST /notice/matchIncome/{id}/save",
					"ruleId":1014,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-进项发票匹配",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-进项发票匹配列表",
					"pruleId":10,
					"resource":"GET /notice/matchIncome/{id}",
					"ruleId":1015,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-销项发票删除",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-销项删除发票",
					"pruleId":10,
					"resource":"GET /notice/matchOutput/{id}/del",
					"ruleId":1016,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-销项发票匹配列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-销项发票匹配列表",
					"pruleId":10,
					"resource":"GET /notice/matchOutput/{id}",
					"ruleId":1017,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-导出进项结算通知单",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-导出进项结算通知单",
					"pruleId":10,
					"resource":"GET /notice/export/income",
					"ruleId":1018,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"通知单管理-导出销项结算通知单",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"通知单管理-导出销项结算通知单",
					"pruleId":10,
					"resource":"GET /notice/export/output",
					"ruleId":1019,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表",
					"pruleId":9,
					"resource":"statistical",
					"ruleId":999,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表-发票台账汇总",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表-发票台账汇总",
					"pruleId":9,
					"resource":"POST /statistical/async/genInvoiceLedger",
					"ruleId":901,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表-认证历史汇总",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表-认证历史汇总",
					"pruleId":9,
					"resource":"POST /statistical/async/genInvoiceStatisticalAuthLog",
					"ruleId":902,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表-发票明细汇总",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表-发票明细汇总",
					"pruleId":9,
					"resource":"POST /statistical/async/genInvoiceDetail",
					"ruleId":903,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表-获取下载地址",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表-获取下载地址",
					"pruleId":9,
					"resource":"GET /statistical/getUrl",
					"ruleId":904,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表-获取报表生成记录",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表-获取报表生成记录",
					"pruleId":9,
					"resource":"GET /statistical/list",
					"ruleId":905,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"板块管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"板块管理",
					"pruleId":7,
					"resource":"user",
					"ruleId":799,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"发票认证",
					"pruleId":1,
					"resource":"invoice",
					"ruleId":12,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证",
					"pruleId":12,
					"resource":"invoice",
					"ruleId":1299,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-查询可认证专票-分页查询",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-查询可认证专票-分页查询",
					"pruleId":12,
					"resource":"GET /invoiceauth",
					"ruleId":86,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-提交",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-提交",
					"pruleId":12,
					"resource":"POST /invoiceauth/authInvoiceCommit",
					"ruleId":87,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-提交-返回认证结果",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-提交-返回认证结果",
					"pruleId":12,
					"resource":"POST /invoiceauth/authInvoiceResponse",
					"ruleId":88,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-确认更新草",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-确认更新草",
					"pruleId":12,
					"resource":"POST /invoiceauth/updateInvoiceDraft",
					"ruleId":90,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-提交文件勾选草稿",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-提交文件勾选草稿",
					"pruleId":12,
					"resource":"POST /invoiceauth/updateInvoiceDraftByFile",
					"ruleId":91,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-取消勾选",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-取消勾选",
					"pruleId":12,
					"resource":"POST /invoiceauth/cancelInvoiceDraft",
					"ruleId":92,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-取消勾全部勾选",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-取消全部勾选",
					"pruleId":12,
					"resource":"POST /invoiceauth/cancelInvoiceDraft/{id}",
					"ruleId":93,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-查询提交历史",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-查询提交历史",
					"pruleId":12,
					"resource":"GET /invoiceauth/getInvoiceAuthBatchByPage",
					"ruleId":94,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-查询提交历史详情",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-查询提交历史详情",
					"pruleId":12,
					"resource":"GET /invoiceauth/getInvoiceAuthBatchDetail",
					"ruleId":95,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-查询认证提交批次",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-查询认证提交批次",
					"pruleId":12,
					"resource":"GET /invoiceauth/getInvoiceAuthBatchByPage",
					"ruleId":96,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"认证-提交批次统计查询",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-提交批次统计查询",
					"pruleId":12,
					"resource":"GET /invoiceauth/getInvoiceAuthBatchCountByCondition",
					"ruleId":97,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-查询认证提交详细历史",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-查询认证提交详细历史",
					"pruleId":12,
					"resource":"GET /invoiceauth/getInvoiceAuthLogByPage",
					"ruleId":98,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证--count数据查询",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证--count数据查询",
					"pruleId":12,
					"resource":"GET /invoiceauth/getInvoiceCountByCondition",
					"ruleId":111,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-查询认证提交详细历史统计",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-查询认证提交详细历史统计",
					"pruleId":12,
					"resource":"GET /invoiceauth/getInvoiceAuthLogCountByCondition",
					"ruleId":99,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-二维码查询",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-二维码查询",
					"pruleId":12,
					"resource":"GET /invoiceauth/qrcode",
					"ruleId":89,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票认证-查询已勾选列表-分页查询",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票认证-查询已勾选列表-分页查询",
					"pruleId":12,
					"resource":"GET /invoiceauth/queryInvoiceDraftPage",
					"ruleId":1208,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表-异步生成进项结算通知单报表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表-异步生成进项结算通知单报表",
					"pruleId":9,
					"resource":"POST /notice/asyncReport/income",
					"ruleId":906,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表-异步生成销项结算通知单报表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表-异步生成销项结算通知单报表",
					"pruleId":9,
					"resource":"POST /notice/asyncReport/output",
					"ruleId":907,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表-查询通知单的生成记录",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表-查询通知单的生成记录",
					"pruleId":9,
					"resource":"GET /notice/asyncReport/list",
					"ruleId":908,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"统计报表-获取通知单报表的下载地址",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"统计报表-获取通知单报表的下载地址",
					"pruleId":9,
					"resource":"GET /notice/asyncReport/getUrl",
					"ruleId":909,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"部门管理--删除部门",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"部门管理--删除部门",
					"pruleId":2,
					"resource":"POST /company/{id}/department/{id}/deleted",
					"ruleId":260,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"OCR管理-上传ocr图片",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"OCR管理-上传ocr图片",
					"pruleId":8,
					"resource":"POST /ocr/uploadOcrImg",
					"ruleId":834,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"消息管理",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"消息管理",
					"pruleId":1,
					"resource":"invoice",
					"ruleId":13,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"消息管理",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"消息管理",
					"pruleId":13,
					"resource":"message",
					"ruleId":1399,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"消息管理-发送邮件",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"消息管理-发送邮件",
					"pruleId":13,
					"resource":"POST /message/email/sendSimpleEmail",
					"ruleId":1301,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"消息管理-阅读消息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"消息管理-阅读消息",
					"pruleId":13,
					"resource":"GET /message/read",
					"ruleId":1302,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"消息管理-删除消息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"消息管理-删除消息",
					"pruleId":13,
					"resource":"POST /message/delete",
					"ruleId":1303,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"消息管理-清空消息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"消息管理-清空消息",
					"pruleId":13,
					"resource":"GET /message/deleteAll",
					"ruleId":1304,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"消息管理-初始化用户消息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"消息管理-初始化用户消息",
					"pruleId":13,
					"resource":"GET /message/initUserMessage",
					"ruleId":1305,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"消息管理-获取未读消息数",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"消息管理-获取未读消息数",
					"pruleId":13,
					"resource":"GET /message/getUserUnreadCount",
					"ruleId":1306,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"消息管理-获取用户消息列表",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"消息管理-获取用户消息列表",
					"pruleId":13,
					"resource":"GET /message/getUserMessage",
					"ruleId":1307,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"文件上传-获取批量上传token",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"文件上传-获取批量上传token",
					"pruleId":8,
					"resource":"POST /file/getCallBackToken",
					"ruleId":807,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"文件上传-获取单条上传token",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"文件上传-获取单条上传token",
					"pruleId":8,
					"resource":"POST /file/getSimpleToken",
					"ruleId":808,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"公司配置管理-查询公司配置",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"公司配置管理-查询公司配置",
					"pruleId":2,
					"resource":"POST /company/config/query",
					"ruleId":261,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票对比-批次查询",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票对比-批次查询",
					"pruleId":8,
					"resource":"POST /invoicecompare/queryInvoiceCompareByPage",
					"ruleId":835,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票对比-批次明细查询",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票对比-批次明细查询",
					"pruleId":8,
					"resource":"POST /invoicecompare/queryInvoiceCompareDetail/{id}",
					"ruleId":836,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票对比-添加批次",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票对比-添加批次",
					"pruleId":8,
					"resource":"POST /invoicecompare/addInvoiceCompare",
					"ruleId":837,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票对比-excel导入批次明细",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票对比-excel导入批次明细",
					"pruleId":8,
					"resource":"POST /invoicecompare/addInvoiceCompareByExcel/{id}",
					"ruleId":838,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票对比-删除某条明细",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票对比-删除某条明细",
					"pruleId":8,
					"resource":"POST /invoicecompare/delInvoiceCompareDetail/{id}",
					"ruleId":839,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"OCR管理-qrcode服务器回调",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"OCR管理-qrcode服务器回调",
					"pruleId":8,
					"resource":"POST callback/qrcode",
					"ruleId":840,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"OCR管理-ocr服务器回调",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"OCR管理-ocr服务器回调",
					"pruleId":8,
					"resource":"POST callback/ocr",
					"ruleId":841,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验",
					"icon":"iconfont icon-other",
					"level":1,
					"name":"第三方查验",
					"pruleId":1,
					"resource":"thirdcheck",
					"ruleId":14,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验",
					"pruleId":14,
					"resource":"thirdcheck",
					"ruleId":1499,
					"type":0
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验-导出查验文件",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验-导出查验文件",
					"pruleId":14,
					"resource":"POST /global/invoice/third-realcheck/export-realcheck",
					"ruleId":1401,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验-四要素录入发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验-四要素录入发票",
					"pruleId":14,
					"resource":"POST /global/invoice/third-realcheck/fourkey-logging",
					"ruleId":1402,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验-获得OCR文件上传TOKEN",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验-获得OCR文件上传TOKEN",
					"pruleId":14,
					"resource":"GET /global/invoice/third-realcheck/ocr-token",
					"ruleId":1403,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验-获得QR文件上传TOKEN",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验-获得QR文件上传TOKEN",
					"pruleId":14,
					"resource":"GET /global/invoice/third-realcheck/qr-token",
					"ruleId":1404,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验-根据查询条件查询验证记录",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验-根据查询条件查询验证记录",
					"pruleId":14,
					"resource":"POST /global/invoice/third-realcheck/query",
					"ruleId":1405,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验-根据录入ID查询发票明细",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验-根据录入ID查询发票明细",
					"pruleId":14,
					"resource":"GET /global/invoice/third-realcheck/detail",
					"ruleId":1406,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验-获取影像文件地址",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验-获取影像文件地址",
					"pruleId":14,
					"resource":"GET /global/invoice/third-realcheck/image-url",
					"ruleId":1407,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"公司管理--根据公司ID获取整个集团信息",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"公司管理--获取整个公司的信息",
					"pruleId":2,
					"resource":"GET /company/{id}/allCompany",
					"ruleId":262,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"公司管理--获取公司的树形结构",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"公司管理--获取公司的树形结构",
					"pruleId":2,
					"resource":"GET /company/{id}/subsidiaryTree",
					"ruleId":263,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-获取未归集的发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-获取未归集的发票",
					"pruleId":8,
					"resource":"GET /invoice/notionalPooling/get",
					"ruleId":842,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"发票管理-归集发票",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"发票管理-归集",
					"pruleId":8,
					"resource":"POST /invoice/notionalPooling/confirm",
					"ruleId":843,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验-获得OCR的TOKEN",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验-获得OCR的TOKEN",
					"pruleId":14,
					"resource":"POST /global/invoice/third-realcheck/ocr-token",
					"ruleId":1409,
					"type":1
				}
			},
			{
				"hasPermission":false,
				"rule":{
					"description":"第三方查验-excel录入",
					"icon":"iconfont icon-other",
					"level":2,
					"name":"第三方查验-excel录入",
					"pruleId":14,
					"resource":"POST /global/invoice/third-realcheck/upload-logging",
					"ruleId":1408,
					"type":1
				}
			}
		]
	},
	"ok":true,
	"status":{
		"description":null,
		"message":null,
		"path":null,
		"returnCode":"200",
		"serviceCode":null,
		"time":null
	}
}