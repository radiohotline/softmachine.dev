NOW=$(date "+%Y-%m-%d %H:%M:%S")
FILE=index.html
sed -i "s|Updated: .*</p>|Updated: $NOW</p>|" $FILE

neoup -f index.html
