setup:
	unzip temp.zip
	mv globe-graphic-template-master/* .
	rm -rf temp.zip globe-graphic-template-master LICENSE README.md
	@echo "\n-- HARD CODE, HARD NEWS! --\n"

awesome: 
	curl -Lk https://github.com/russellgoldenberg/globe-iframe-graphic-tasks/archive/master.zip > temp.zip
	unzip temp.zip
	rm -rf globe-iframe-graphic-tasks-master/README.md
	mv globe-iframe-graphic-tasks-master/* .
	mv globe-iframe-graphic-tasks-master/.jshintrc .
	mv globe-iframe-graphic-tasks-master/.gitignore .
	mv *.scss src/css
	rm -rf temp.zip globe-iframe-graphic-tasks-master
	@echo "\n--RUN 'NPM INSTALL' --\n"

apps: 
	@echo "TODO..."