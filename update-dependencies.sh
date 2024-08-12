   #!/bin/bash

   for dir in src/*; do
     if [ -d "$dir" ]; then
       echo "Updating dependencies in $dir"
       cd "$dir"
       npm outdated
       npm update
       cd ../..
     fi
   done