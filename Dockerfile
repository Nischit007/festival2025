# Use Node 20 (LTS) for compatibility with Vite
FROM node:20

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build your app
COPY . .
RUN npm run build

# Expose the Vite preview port (4173)
EXPOSE 4173

# Start the preview server
CMD ["npm", "run", "preview", "--", "--host", "--port", "4173"]
