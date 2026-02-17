NOW=$(date "+%Y-%m-%d %H:%M:%S")
FILE=index.html

sed -e "s/Updated: .*<\/p>/Updated: $NOW<\/p>/g" -i '' $FILE

neoup -f index.html
