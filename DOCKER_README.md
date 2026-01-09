# Maplytiks Docker Deployment Guide

This guide provides comprehensive instructions for containerizing and deploying the Maplytiks React application using Docker.

## 📁 Docker Files Overview

- `Dockerfile` - Simple production build
- `Dockerfile.multi` - Multi-stage build (development + production)
- `docker-compose.yml` - Container orchestration
- `.dockerignore` - Files to exclude from Docker context
- `nginx.conf` - Nginx reverse proxy configuration
- `docker-build.sh` - Linux/Mac build script
- `docker-build.ps1` - Windows PowerShell build script

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed and running
- Git (to clone the repository)

### Option 1: Simple Production Build
```bash
# Build the image
docker build -t maplytiks:latest .

# Run the container
docker run -p 3040:3040 maplytiks:latest
```

### Option 2: Using Docker Compose (Recommended)
```bash
# Run production environment
docker-compose up -d maplytiks-prod

# Access the application
# http://localhost:3040
```

## 🛠 Build Options

### 1. Development Environment
For development with hot reload:
```bash
# Build development image
docker build -f Dockerfile.multi --target development -t maplytiks:dev .

# Run development environment
docker-compose up maplytiks-dev
```

### 2. Production Environment
For optimized production deployment:
```bash
# Build production image
docker build -f Dockerfile.multi --target production -t maplytiks:prod .

# Run production environment
docker-compose up -d maplytiks-prod
```

### 3. Production with Nginx
For production with reverse proxy:
```bash
# Run with nginx reverse proxy
docker-compose --profile nginx up -d

# Access via: http://localhost (port 80)
```

## 🔧 Using Build Scripts

### Linux/Mac (Bash)
```bash
# Make script executable
chmod +x docker-build.sh

# Build development image
./docker-build.sh dev

# Build production image
./docker-build.sh prod

# Run development environment
./docker-build.sh run-dev

# Run production environment
./docker-build.sh run-prod

# Run with nginx
./docker-build.sh run-nginx

# Stop all services
./docker-build.sh stop

# Clean up Docker resources
./docker-build.sh clean
```

### Windows (PowerShell)
```powershell
# Build development image
.\docker-build.ps1 -Command dev

# Build production image
.\docker-build.ps1 -Command prod

# Run development environment
.\docker-build.ps1 -Command run-dev

# Run production environment
.\docker-build.ps1 -Command run-prod

# Run with nginx
.\docker-build.ps1 -Command run-nginx

# Stop all services
.\docker-build.ps1 -Command stop

# Clean up Docker resources
.\docker-build.ps1 -Command clean
```

## 🏗 Docker Images Explained

### Simple Dockerfile
- **Purpose**: Basic production build
- **Size**: Moderate (includes dev dependencies during build)
- **Use Case**: Simple deployments, testing

### Multi-stage Dockerfile
- **Purpose**: Optimized builds with multiple targets
- **Targets**:
  - `development`: Full dev environment with hot reload
  - `production`: Optimized for deployment
- **Benefits**: Smaller production images, better caching

## 🌐 Deployment Configurations

### Development Configuration
- **Port**: 3040
- **Hot Reload**: Enabled
- **Volume Mounting**: Source code mounted for live changes
- **Node Modules**: Cached in named volume

### Production Configuration
- **Port**: 3040
- **Optimization**: Built application with production settings
- **Security**: Non-root user (reactuser)
- **Health Checks**: Automatic health monitoring
- **Restart Policy**: Unless stopped

### Nginx Configuration
- **Load Balancing**: Proxy requests to application
- **Compression**: Gzip enabled
- **Security Headers**: XSS, CSRF protection
- **WebSocket Support**: For real-time features

## 🔍 Environment Variables

### Available Variables
```env
NODE_ENV=production|development
PORT=3040
HOST=localhost
ENABLE_TUNNEL=false
CHOKIDAR_USEPOLLING=true  # For Windows/WSL hot reload
```

### Setting Environment Variables
```yaml
# In docker-compose.yml
environment:
  - NODE_ENV=production
  - PORT=3040
```

## 🏥 Health Checks

The Docker images include health checks that:
- Check application responsiveness every 30 seconds
- Timeout after 3 seconds
- Allow 5 seconds for startup
- Restart container after 3 failed checks

## 📊 Monitoring and Logs

### View Container Logs
```bash
# View logs for specific service
docker-compose logs maplytiks-prod

# Follow logs in real-time
docker-compose logs -f maplytiks-prod

# View last 50 lines
docker-compose logs --tail=50 maplytiks-prod
```

### Check Container Status
```bash
# List running containers
docker-compose ps

# Check health status
docker inspect --format='{{.State.Health.Status}}' <container_id>
```

## 🔧 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Change port in docker-compose.yml
   ports:
     - "3041:3040"  # Use 3041 instead of 3040
   ```

2. **Build Failures**
   ```bash
   # Clean Docker cache
   docker builder prune -a
   
   # Rebuild without cache
   docker build --no-cache -t maplytiks:latest .
   ```

3. **Permission Issues (Linux)**
   ```bash
   # Fix Docker permissions
   sudo usermod -aG docker $USER
   # Logout and login again
   ```

4. **Windows/WSL Hot Reload Issues**
   ```yaml
   # In docker-compose.yml, ensure:
   environment:
     - CHOKIDAR_USEPOLLING=true
   ```

### Performance Optimization

1. **Use Multi-stage Builds**: Reduces final image size
2. **Layer Caching**: Order Dockerfile commands for better caching
3. **Node Modules Volume**: Prevents rebuilding node_modules
4. **Production Dependencies**: Only install what's needed for runtime

## 🚀 Production Deployment

### AWS ECS/Fargate
```bash
# Tag for ECR
docker tag maplytiks:prod <account>.dkr.ecr.<region>.amazonaws.com/maplytiks:latest

# Push to ECR
docker push <account>.dkr.ecr.<region>.amazonaws.com/maplytiks:latest
```

### Google Cloud Run
```bash
# Tag for GCR
docker tag maplytiks:prod gcr.io/<project-id>/maplytiks:latest

# Push to GCR
docker push gcr.io/<project-id>/maplytiks:latest
```

### Digital Ocean App Platform
```yaml
# app.yaml
name: maplytiks
services:
  - name: web
    source_dir: /
    github:
      repo: your-repo/maplytiks
      branch: main
    run_command: npm run start:prod
    environment_slug: node-js
    instance_count: 1
    instance_size_slug: basic-xxs
    http_port: 3040
```

## 🔒 Security Best Practices

1. **Non-root User**: Application runs as `reactuser`
2. **Minimal Base Image**: Using Alpine Linux
3. **Security Headers**: Implemented in Nginx
4. **No Secrets in Images**: Use environment variables
5. **Health Checks**: Automatic failure detection
6. **Resource Limits**: Set in production environments

## 📈 Scaling

### Horizontal Scaling
```yaml
# docker-compose.yml
services:
  maplytiks-prod:
    scale: 3  # Run 3 instances
```

### Load Balancer Configuration
```nginx
upstream maplytiks {
    server maplytiks-prod_1:3040;
    server maplytiks-prod_2:3040;
    server maplytiks-prod_3:3040;
}
```

## 🆘 Support

For issues and questions:
1. Check container logs: `docker-compose logs`
2. Verify health status: `docker-compose ps`
3. Review environment variables
4. Check network connectivity
5. Validate Docker installation

## 📋 Commands Reference

| Command | Description |
|---------|-------------|
| `docker-compose up -d` | Start services in background |
| `docker-compose down` | Stop and remove services |
| `docker-compose logs -f` | Follow logs |
| `docker-compose ps` | List services |
| `docker-compose exec <service> sh` | Access container shell |
| `docker-compose pull` | Pull latest images |
| `docker-compose restart` | Restart services |