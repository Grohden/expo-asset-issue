## Expo issue with hermes and assets ONLY in release builds

This is a reproduction of the issue: https://github.com/expo/expo/issues/34166

The issue is that the assets are not loading in the release build when hermes is disabled.

### Steps to reproduce
1. Clone the repo
2. Run `npm install`
3. Run `cd android`
4. Run `./gradlew assembleStagingRelease`
5. Open your emulator/device
6. Run `adb install ./app/build/outputs/apk/staging/release/app-staging-release.apk`

Open the newly installed app and you should see the image assets not loading.

Currently this seems to be caused by `gradle.properties` having
```properties
newArchEnabled=true
hermesEnabled=false
```

If you change `hermesEnabled` to:
```properties
newArchEnabled=true
hermesEnabled=true
```

do a `./gradlew clean` and re-do the steps the image will load in the release build.
