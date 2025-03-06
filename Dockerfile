# Step 1: Build the Frontend
FROM node:18 AS frontend-build
WORKDIR /app/frontend
COPY frontend/ .
RUN npm install && npm run build

# Step 2: Build the Backend
FROM python:3.10 AS backend-build
WORKDIR /app/backend
COPY backend/ .
RUN pip install -r requirements.txt

# Step 3: Prepare the Final Image with Nginx
FROM nginx:latest
WORKDIR /app

# Copy Backend
COPY --from=backend-build /app/backend /app/backend

# Copy Frontend build to Nginx
COPY --from=frontend-build /app/frontend/build /usr/share/nginx/html

# Copy Nginx Config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose necessary ports
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
