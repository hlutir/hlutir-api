FROM node:15-alpine

# Expose port 3000 for NestJS
EXPOSE 3000

# Update NPM
RUN npm install -g npm@7.19.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install -g prisma
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Compile the application
# RUN npx prisma generate
# RUN npm run build

RUN chmod -R 755 /usr/src/app && chown -R node:node /usr/src/app

# Change the user to a non-root user.
USER node

# CMD [ "npm", "run", "start:dev" ]
CMD "./start"