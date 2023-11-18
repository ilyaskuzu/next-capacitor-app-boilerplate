# Next.js Capacitor App Boilerplate

This is a boilerplate project for building mobile applications using Next.js and Capacitor.

## Features

- Next.js for building the web application
- Capacitor for wrapping the web application into a native mobile app
- Ionic for UI components

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

## Building the Mobile App

After building the application for production, you can build the mobile app:

```bash
npx cap add ios
npx cap add android

npx cap copy
npx cap open android
# or
npx cap open ios
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
