# Use lightweight Nginx image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx content
RUN rm -rf ./*

# Copy all project files into Nginx html directory
COPY . .

# Expose port 80 for HTTP
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

