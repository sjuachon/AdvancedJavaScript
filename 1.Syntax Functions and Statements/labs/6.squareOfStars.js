function main(n = 5) {

    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(n).trim());
    }
}

main()
main(1);
main(2);
main(5);
main();