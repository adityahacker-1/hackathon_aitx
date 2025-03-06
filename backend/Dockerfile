# Use Python as base image
FROM python:3.10

# Set working directory
WORKDIR /app

# Copy the backend files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# ✅ Create persistent storage for SQLite
RUN mkdir -p /data

# Expose Flask port
EXPOSE 5500

# Start Flask server
CMD ["python", "app.py"]
