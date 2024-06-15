#!/bin/bash
PLATFORM=$(rustc -Vv | grep host | cut -f2 -d' ')
rm -rf src-tauri/bin
mkdir -p src-tauri/bin/build
echo "#!/bin/bash" > src-tauri/bin/build/backend-$PLATFORM
echo "echo running on $PLATFORM" >> src-tauri/bin/build/backend-$PLATFORM
chmod a+x src-tauri/bin/build/backend-$PLATFORM
yarn start &
(cd ebook-manager-backend && mvn spring-boot:run)