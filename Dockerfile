# /usr/src/nodejs/hello-docker/Dockerfile
FROM node:16.15.0

# 在容器中创建一个目录
RUN mkdir -p /usr/src/nodejs/

# 定位到容器的工作目录
WORKDIR /usr/src/nodejs/

# RUN/COPY是分层的，package.json 提前，只要没修改就不会重新安装包
COPY package.json /usr/src/nodejs/package.json
RUN cd /usr/src/nodejs/
RUN npm i
#
## 把当前目录下所有的文件拷贝到 Image 的 /usr/src/nodejs/目录下
COPY . /usr/src/nodejs/
#
EXPOSE 3000
CMD npm start
