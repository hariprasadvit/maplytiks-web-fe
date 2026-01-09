# PowerShell Build Script for Maplytiks Docker Deployment

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("dev", "prod", "simple", "run-dev", "run-prod", "run-nginx", "stop", "clean", "all")]
    [string]$Command
)

Write-Host "🚀 Maplytiks Docker Build Scripts" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan

function Build-Dev {
    Write-Host "📦 Building development image..." -ForegroundColor Yellow
    docker build -f Dockerfile.multi --target development -t maplytiks:dev .
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Development image built successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to build development image!" -ForegroundColor Red
        exit 1
    }
}

function Build-Prod {
    Write-Host "📦 Building production image..." -ForegroundColor Yellow
    docker build -f Dockerfile.multi --target production -t maplytiks:prod .
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Production image built successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to build production image!" -ForegroundColor Red
        exit 1
    }
}

function Build-Simple {
    Write-Host "📦 Building simple production image..." -ForegroundColor Yellow
    docker build -f Dockerfile -t maplytiks:latest .
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Simple production image built successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to build simple production image!" -ForegroundColor Red
        exit 1
    }
}

function Run-Dev {
    Write-Host "🏃 Starting development environment..." -ForegroundColor Yellow
    docker-compose up maplytiks-dev
}

function Run-Prod {
    Write-Host "🏃 Starting production environment..." -ForegroundColor Yellow
    docker-compose up -d maplytiks-prod
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Production environment started!" -ForegroundColor Green
        Write-Host "🌐 Application available at: http://localhost:3040" -ForegroundColor Blue
    } else {
        Write-Host "❌ Failed to start production environment!" -ForegroundColor Red
        exit 1
    }
}

function Run-Nginx {
    Write-Host "🏃 Starting production environment with nginx..." -ForegroundColor Yellow
    docker-compose --profile nginx up -d
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Production environment with nginx started!" -ForegroundColor Green
        Write-Host "🌐 Application available at: http://localhost" -ForegroundColor Blue
    } else {
        Write-Host "❌ Failed to start production environment with nginx!" -ForegroundColor Red
        exit 1
    }
}

function Stop-All {
    Write-Host "🛑 Stopping all services..." -ForegroundColor Yellow
    docker-compose down
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ All services stopped!" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to stop services!" -ForegroundColor Red
        exit 1
    }
}

function Clean-Up {
    Write-Host "🧹 Cleaning up Docker resources..." -ForegroundColor Yellow
    docker-compose down --volumes --remove-orphans
    docker system prune -f
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Cleanup completed!" -ForegroundColor Green
    } else {
        Write-Host "❌ Cleanup failed!" -ForegroundColor Red
        exit 1
    }
}

function Show-Help {
    Write-Host "Usage: .\docker-build.ps1 -Command <command>" -ForegroundColor White
    Write-Host ""
    Write-Host "Commands:" -ForegroundColor White
    Write-Host "  dev        - Build development image" -ForegroundColor Gray
    Write-Host "  prod       - Build production image (multi-stage)" -ForegroundColor Gray
    Write-Host "  simple     - Build simple production image" -ForegroundColor Gray
    Write-Host "  run-dev    - Run development environment" -ForegroundColor Gray
    Write-Host "  run-prod   - Run production environment" -ForegroundColor Gray
    Write-Host "  run-nginx  - Run production with nginx reverse proxy" -ForegroundColor Gray
    Write-Host "  stop       - Stop all services" -ForegroundColor Gray
    Write-Host "  clean      - Clean up Docker resources" -ForegroundColor Gray
    Write-Host "  all        - Build both dev and prod images" -ForegroundColor Gray
}

# Main script logic
switch ($Command) {
    "dev" {
        Build-Dev
    }
    "prod" {
        Build-Prod
    }
    "simple" {
        Build-Simple
    }
    "run-dev" {
        Run-Dev
    }
    "run-prod" {
        Run-Prod
    }
    "run-nginx" {
        Run-Nginx
    }
    "stop" {
        Stop-All
    }
    "clean" {
        Clean-Up
    }
    "all" {
        Build-Dev
        Build-Prod
    }
    default {
        Show-Help
    }
}