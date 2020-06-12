# 部署方式
每次修改完代码，必须执行这行代码，才能正确请求JS和CSS。

如果使用GithubPage，还要小心访问链接的路径是否正确。

```bash
parcel build src/index.html --public-url
```
