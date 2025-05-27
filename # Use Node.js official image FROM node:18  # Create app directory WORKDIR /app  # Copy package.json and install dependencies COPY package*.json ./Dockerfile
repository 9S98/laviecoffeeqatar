# Use Node.js official image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port (example: 8080)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
