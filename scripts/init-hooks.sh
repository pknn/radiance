#! /bin/sh
PRE_COMMIT=.git/hooks/pre-commit
PRE_PUSH=.git/hooks/pre-push

if [ ! -f "$PRE_COMMIT" ]; then
    echo "!# /bin/sh" > $PRE_COMMIT
    echo "npm run lint" >> $PRE_COMMIT
    chmod +x $PRE_COMMIT

    echo "pre-commit hook created"
fi

if [ ! -f "$PRE_PUSH" ]; then
    echo "!# /bin/sh" > $PRE_PUSH
    echo "npm run compile" >> $PRE_PUSH
    echo "npm run test" >> $PRE_PUSH
    chmod +x $PRE_PUSH

    echo "pre-push hook created"
fi