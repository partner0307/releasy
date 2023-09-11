#zero downtime deployment nextjs without vercel

echo "Deploy starting..."

git pull

yarn || exit

mkdir temp

echo "BUILD START"

BUILD_DIR=./temp yarn build || exit

if [ ! -d "temp" ]; then
  echo '\033[31m temp Directory not exists!\033[0m'
  exit 1;
fi

echo "BUILD ENDED"

rm -rf .next

mv ./temp .next

echo "GENERATING SITEMAP"

yarn next-sitemap || exit

echo "END SITEMAP"

pm2 reload nextjs --update-env

#yarn start

echo "Deploy done."

#make sure `next.config.js` it set `distDir: process.env.BUILD_DIR`
