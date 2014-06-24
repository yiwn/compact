mocha = ./node_modules/.bin/mocha
jshint = ./node_modules/.bin/jshint
component = ./node_modules/.bin/component

build: test
	@$(component) build

test: lint
	@$(mocha)

lint: ./lib/*.js
	@$(jshint) $^

clean:
	@rm -rf build components node_modules

.PHONY: test lint build clean
