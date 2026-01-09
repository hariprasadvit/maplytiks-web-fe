#!/bin/bash

# Build scripts for Docker deployment

set -e

echo "🚀 Maplytiks Docker Build Scripts"
echo "================================="

# Function to build development image
build_dev() {
    echo "📦 Building development image..."
    docker build -f Dockerfile.multi --target development -t maplytiks:dev .
    echo "✅ Development image built successfully!"
}

# Function to build production image
build_prod() {
    echo "📦 Building production image..."
    docker build -f Dockerfile.multi --target production -t maplytiks:prod .
    echo "✅ Production image built successfully!"
}

# Function to build simple production image
build_simple() {
    echo "📦 Building simple production image..."
    docker build -f Dockerfile -t maplytiks:latest .
    echo "✅ Simple production image built successfully!"
}

# Function to run development environment
run_dev() {
    echo "🏃 Starting development environment..."
    docker-compose up maplytiks-dev
}

# Function to run production environment
run_prod() {
    echo "🏃 Starting production environment..."
    docker-compose up -d maplytiks-prod
    echo "✅ Production environment started!"
    echo "🌐 Application available at: http://localhost:3040"
}

# Function to run with nginx
run_nginx() {
    echo "🏃 Starting production environment with nginx..."
    docker-compose --profile nginx up -d
    echo "✅ Production environment with nginx started!"
    echo "🌐 Application available at: http://localhost"
}

# Function to stop all services
stop_all() {
    echo "🛑 Stopping all services..."
    docker-compose down
    echo "✅ All services stopped!"
}

# Function to clean up
cleanup() {
    echo "🧹 Cleaning up Docker resources..."
    docker-compose down --volumes --remove-orphans
    docker system prune -f
    echo "✅ Cleanup completed!"
}

# Main script logic
case "$1" in
    "dev")
        build_dev
        ;;
    "prod")
        build_prod
        ;;
    "simple")
        build_simple
        ;;
    "run-dev")
        run_dev
        ;;
    "run-prod")
        run_prod
        ;;
    "run-nginx")
        run_nginx
        ;;
    "stop")
        stop_all
        ;;
    "clean")
        cleanup
        ;;
    "all")
        build_dev
        build_prod
        ;;
    *)
        echo "Usage: $0 {dev|prod|simple|run-dev|run-prod|run-nginx|stop|clean|all}"
        echo ""
        echo "Commands:"
        echo "  dev        - Build development image"
        echo "  prod       - Build production image (multi-stage)"
        echo "  simple     - Build simple production image"
        echo "  run-dev    - Run development environment"
        echo "  run-prod   - Run production environment"
        echo "  run-nginx  - Run production with nginx reverse proxy"
        echo "  stop       - Stop all services"
        echo "  clean      - Clean up Docker resources"
        echo "  all        - Build both dev and prod images"
        exit 1
        ;;
esac