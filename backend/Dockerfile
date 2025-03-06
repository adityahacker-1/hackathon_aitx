# Use Python as base image
FROM python:3.10

# Set working directory
WORKDIR /app

# Copy backend files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose Flask port
EXPOSE 5500

# Start Flask API
CMD ["python", "app.py"]
