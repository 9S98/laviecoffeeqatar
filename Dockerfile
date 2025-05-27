# Use the official Node.js 18 image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Build the Next.js app
RUN npm run build

# Start the Next.js server
EXPOSE 8080
ENV PORT 8080
CMD ["npm", "start"]
