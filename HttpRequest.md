http/1.1协议中定义了八种方法来表明Request_URI指定资源的不同操作方式：

* OPTIONS（询问支持的方法）
用于查询针对请求URI指定的资源支持的方法

* HEAD（获取报文首部）
用于确认URI的有效性以及资源更新的日期时间


* GET（获取资源）
用来请求访问被URI标识的资源，指定的资源被服务器解析以后返回响应内容

* POST（传输实体主体）
传输实体的主体

* PUT（传输文件）
用于传输文件，然后保存到请求URI指定的位置（存在安全问题）

* DELETE （删除文件）
按请求的URI删除指定资源（存在安全问题）

* TRACE（追踪路径）
用于让Web服务器端将之前的请求通信环回给客户端，主要用于测试或诊断

* CONNECT（代理）
预留给能够将连接改为管道方式的代理服务器