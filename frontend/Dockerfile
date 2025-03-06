# Use Node.js for building the frontend
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the files and build the project
COPY . .
RUN npm run build  

# Start a new container for running the server
FROM node:18-alpine

WORKDIR /app
COPY --from=build /app /app

# Expose Next.js server port
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]
