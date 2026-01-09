# Use Node.js 16 as base image (compatible with the project requirements)
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./
COPY package-lock.json* ./

# Copy existing node_modules (preserves current working dependencies)
COPY node_modules ./node_modules

# Copy source code
COPY . .

# Create a non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S reactuser -u 1001

# Build the application
RUN npm run build

# Change ownership of the app directory
RUN chown -R reactuser:nodejs /app
USER reactuser

# Expose port
EXPOSE 3040

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const http = require('http'); const options = { host: 'localhost', port: 3040, path: '/', timeout: 2000 }; const req = http.request(options, (res) => { process.exit(res.statusCode === 200 ? 0 : 1); }); req.on('error', () => process.exit(1)); req.end();"

# Start the application
CMD ["npm", "run", "start:prod"]