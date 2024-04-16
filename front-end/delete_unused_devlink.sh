#!/bin/bash

# Define the directory to search for .tsx files
searchDirs=("src/pages" "src/renderer" "src/components")

# Define the patterns to ignore
ignorePatterns=("devlink" "devlinkContext" "index" "interactions" "types" "utils" "Navbar" "Notification" "CafeOpeningHours" "PubOpeningHours")

# Find all .js and .d.ts files in ./src/devlink/
find ./src/devlink -maxdepth 1 -type f \( -name "*.js" -o -name "*.d.ts" \) | while read filepath; do
  # Extract the basename without extension
  basename=$(basename "$filepath" | sed 's/\.[^.]*$//')

  # Flag to indicate if the file should be skipped
  skipFile=0

  # Skip if basename matches ignore patterns
  for pattern in "${ignorePatterns[@]}"; do
    if [[ "$basename" == *"$pattern"* ]]; then
      skipFile=1
      break
    fi
  done

  if [[ $skipFile -eq 1 ]]; then
    continue
  fi

  # Flag to indicate if the basename was found
  found=0

  # Search for the basename in .tsx files within specified directories
  for dir in "${searchDirs[@]}"; do
    if grep -qr --include="*.tsx" "$basename" "$dir"; then
      found=1
      break
    fi
  done

  # If basename not found in any .tsx file, delete the original file
  if [[ $found -eq 0 ]]; then
    echo "Deleting unmatched file: $filepath"
    rm "$filepath"
  fi
done

echo "Cleanup complete."
