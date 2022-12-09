install:
	npm ci
	npm link
lint:
	npm exec eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8