#!/bin/bash

DIR="img/notebooks/"

for item in *; do
	echo -e \<img loading=\"lazy\" src=\""$DIR""$item"\"\>
done
