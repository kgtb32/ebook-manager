#!/bin/bash
PLATFORM=$(rustc -Vv | grep host | cut -f2 -d' ')
rm -rf src-tauri/bin
mkdir -p src-tauri/bin/build

yarn build
(cd ebook-manager-backend && mvn -Pnative native:compile)
cp ebook-manager-backend/target/ebook-manager-backend src-tauri/bin/build/backend-$PLATFORM

chmod a+x src-tauri/bin/build/backend-$PLATFORM
