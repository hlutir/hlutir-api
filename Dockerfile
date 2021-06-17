FROM node:15-alpine

# Update NPM
RUN npm install -g npm@7.17.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Compile the application
RUN npx prisma migrate dev
RUN npm run build

# Change the user to a non-root user.
USER node

# Expose port 3000 for NestJS
EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]