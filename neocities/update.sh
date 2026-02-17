NOW=$(date "+%Y-%m-%d %H:%M:%S")
FILE=neocities/index.html

sed -e "s/Updated: .*<\/p>/Updated: $NOW<\/p>/g" -i '' $FILE

neoup -f neocities/index.html
