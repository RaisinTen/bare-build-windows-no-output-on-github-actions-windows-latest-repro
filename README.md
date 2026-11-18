# Repro: `bare-build` 1.0.2 produces standalone binaries with no output on GitHub Actions `windows-latest`

Reproducible for issue: https://github.com/holepunchto/bare-build/issues/39

Create a JS app script.

`hello.js`:
```js
console.log('Hello, world!')
```

Use `bare-build` 1.0.2 to produce standalone binaries.
```sh
$ npx bare-build \
    --standalone \
    --base . \
    --name hello \
    --description "bare build hello world repro" \
    --host ${{ matrix.host }} \
    --out out \
    hello.js
```

Running the binary produces the right output on Linux/macOS GitHub Actions runners:
```sh
$ ./out/hello
Hello, world!
```

However, running it on the Windows GitHub Actions runner produces no output:
```pwsh
$ .\out\hello.exe
```

Check out the actions tab: https://github.com/RaisinTen/bare-build-windows-no-output-on-github-actions-windows-latest-repro/actions
