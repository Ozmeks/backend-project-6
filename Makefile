install:
	npm ci
	npm link
lint:
	npm exec eslint .
test-coverage:
	npm test -- --coverage --coverageProvider=v8