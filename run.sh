sudo docker build -t nodejs.mainserver.image .
docker run -itd -p 3001:3000 --name nodejs.mainserver  -v "$(pwd)":/app nodejs.mainserver.image bash 
docker exec -it nodejs.mainserver bash

# sudo docker build -t nodejs.mainserver.image2 .
# docker run -itd -p 3002:3000 --name nodejs.mainserver2 nodejs.mainserver.image2 