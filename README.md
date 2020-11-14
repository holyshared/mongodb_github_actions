# mongodb_github_actions

```shell
docker-compose up -d
docker-compose exec mongodb mongo admin -u root -p example /root/01_replset.js
docker-compose exec mongodb mongo admin -u root -p example /root/02_db.js
docker-compose exec mongodb mongo admin -u root -p example /root/03_user.js
```