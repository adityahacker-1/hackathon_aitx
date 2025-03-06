# Step 1: Use Node.js as the base image
FROM node:18 AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the frontend files
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use a minimal Node.js image for production
FROM node:18 AS runner
WORKDIR /app

COPY --from=builder /app ./

# Expose the Next.js port
EXPOSE 3000

# Run Next.js in standalone mode
CMD ["npm", "start"]
