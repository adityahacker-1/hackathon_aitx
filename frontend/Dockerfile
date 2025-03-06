# Use Node.js for building Next.js app
FROM node:18 AS builder
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . .

# ✅ Set NEXT_PUBLIC_API_BASE_URL explicitly during build
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

# Build the Next.js application
RUN npm run build

# Use a smaller production image
FROM node:18 AS runner
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app ./

# ✅ Set NEXT_PUBLIC_API_BASE_URL explicitly for runtime
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
