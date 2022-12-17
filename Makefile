install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
make lint:
	npx eslint
even-games:
	node bin/brain-even.js
calc-games:
	node bin/brain-calc.js
gcd-games:
	node bin/brain-gcd.js
progression-games:
	node bin/brain-progression.js