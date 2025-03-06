# Step 1: Build the Next.js frontend
FROM node:18 AS frontend-build
WORKDIR /app/frontend
COPY frontend/ .
RUN npm install && npm run build

# Step 2: Build the Flask Backend
FROM python:3.10 AS backend-build
WORKDIR /app/backend
COPY backend/ .
RUN pip install -r requirements.txt

# Step 3: Serve Static Next.js Files With Nginx
FROM nginx:latest
WORKDIR /app

# Copy Backend
COPY --from=backend-build /app/backend /app/backend

# Copy Frontend Exported Files to Nginx
COPY --from=frontend-build /app/frontend/.next /usr/share/nginx/html

# Copy Nginx Config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
