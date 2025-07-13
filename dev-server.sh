#!/bin/bash

# Dev Server Management Script
# This script manages the Next.js development server
# Usage: ./dev-server.sh [--kill]

# Function to kill existing dev server
kill_dev_server() {
    echo "[*] Checking for existing dev server..."
    
    local found_process=false
    
    # Find processes using port 3000
    if lsof -i :3000 > /dev/null 2>&1; then
        echo "→ Found existing dev server on port 3000"
        echo "→ Killing existing processes..."
        
        # Kill all processes using port 3000
        lsof -ti :3000 | xargs kill -9 2>/dev/null
        found_process=true
        
        # Wait a moment for processes to terminate
        sleep 1
        
        echo "✓ Port 3000 processes terminated"
    fi
    
    # Also check for any node processes running next dev
    echo "→ Checking for Next.js dev processes..."
    if pkill -f "next dev" 2>/dev/null; then
        found_process=true
        echo "✓ Next.js dev processes terminated"
    fi
    
    if [ "$found_process" = true ]; then
        echo "✓ Process cleanup complete"
        return 0
    else
        echo "✓ No existing dev server found"
        return 1
    fi
}

# Check for --kill parameter
if [ "$1" = "--kill" ]; then
    echo "========================================="
    echo "Dev Server Manager - Kill Mode"
    echo "========================================="
    
    if kill_dev_server; then
        echo ""
        echo "========================================="
        echo "✅ Dev Server Stopped Successfully!"
        echo "========================================="
        exit 0
    else
        echo ""
        echo "========================================="
        echo "ℹ️  No dev server was running"
        echo "========================================="
        exit 0
    fi
fi

# Regular startup mode
echo "========================================="
echo "Dev Server Manager - Starting..."
echo "========================================="

# Step 1: Clear the log file
echo "[1/4] Clearing dev-server.log..."
> dev-server.log
echo "✓ Log file cleared"

# Step 2: Kill existing dev server if running
echo "[2/4] Killing any existing dev server..."
kill_dev_server

# Step 3: Start the dev server in background
echo "[3/4] Starting new dev server..."

# Use nohup to run in background and redirect output to log file
nohup pnpm dev >> dev-server.log 2>&1 &

# Store the PID of the background process
DEV_SERVER_PID=$!
echo "→ Dev server started with PID: $DEV_SERVER_PID"

# Step 4: Verify the server is starting
echo "[4/4] Verifying server startup..."
sleep 2

# Check if the process is still running
if ps -p $DEV_SERVER_PID > /dev/null; then
    echo "✓ Dev server is running successfully"
    echo ""
    echo "========================================="
    echo "✅ Dev Server Started Successfully!"
    echo "========================================="
    echo "• Server PID: $DEV_SERVER_PID"
    echo "• Log file: dev-server.log"
    echo "• Server URL: http://localhost:3000"
    echo ""
    echo "To view logs: tail -f dev-server.log"
    echo "To stop server: ./dev-server.sh --kill"
    echo "========================================="
    exit 0
else
    echo "❌ Failed to start dev server"
    echo "Please check dev-server.log for errors"
    exit 1
fi