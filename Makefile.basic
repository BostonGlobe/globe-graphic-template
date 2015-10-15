reload:
	browser-sync start --server . --index preview.html --files "src/**/*" --no-notify --no-ghost-mode

line_chart:
	curl -Lk https://github.com/russellgoldenberg/globe-graphic-charts/archive/master.zip > temp.zip
	unzip -q temp.zip
	mv globe-graphic-charts-master/line_chart/* src
	rm -rf temp.zip globe-graphic-charts-master

ai2html:
	sed -i '' '/<!-- begin ai2html here DO NOT MODIFY THIS LINE -->/,/<!-- end ai2html here DO NOT MODIFY THIS LINE -->/{//!d;}' ./src/index.html;
	sed -i '' '/<!-- begin ai2html here DO NOT MODIFY THIS LINE -->/ r src/ai2html-output/online.html' ./src/index.html;
	cp ./src/ai2html-output/assets/*.png ./src/assets/;
