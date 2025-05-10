#!/bin/bash

# Check if code file is provided
if [ -z "$1" ]; then
  echo "Error: No Python file specified"
  exit 1
fi

# Execute the Python script
python "$1"